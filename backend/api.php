<?php


use config\Route;

final class Api
{
    private static function register()
    {
        spl_autoload_register(function ($class_name) {
            $sp = '/';
            $path = dirname(__FILE__)
                . $sp . str_replace('\\', $sp, $class_name)
                . '.php';
            if (file_exists($path)) {
                include_once $path;
            }
        });
    }

    private static function route()
    {
        $uri = Route::uri();
        if ($uri) {
            return Route::retrieveRoute(rtrim($uri, '/'));
        } else {
            return [false, 'api接口不存在(uri is not exist)', ''];
        }
    }

    public static function access($routeData)
    {
        list($controller, $method) = $routeData;
        if (!method_exists($controller, $method)) {
            return [false, 'api接口不存在(method is not exist)', ''];
        } else {
            try {
                return $controller::instance()->$method();
            } catch (Exception $e) {
                return [false, '数据库相关错误', ''];
            }
        }
    }

    public static function bootstrap()
    {
        static::register();
        list($status, $message, $data) = static::route();
        if ($status) {
            list($status, $message, $data) = static::access($data);
        }
        echo json_encode([
            'status' => $status,
            'message' => $message,
            'data' => $data
        ]);
    }
}

Api::bootstrap();


