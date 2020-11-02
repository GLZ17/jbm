<?php


namespace config;

use controller\name\RegionNameController;
use controller\name\DeveloperNameController;
use controller\name\CommunityNameController;
use controller\name\BuildingNameController;
use controller\name\RoomNameController;
use controller\name\BrandNameController;
use controller\name\ProductNameController;
use controller\name\ProcessNameController;

use controller\layer\DeveloperLayerController;
use controller\layer\CommunityLayerController;
use controller\layer\BuildingLayerController;
use controller\layer\RoomLayerController;
use controller\layer\ProductLayerController;
use controller\information\ProductInformationController;

final class Route
{
    private static $route = [];
    private static $rest = [
        RegionNameController::class,
        DeveloperNameController::class,
        CommunityNameController::class,
        BuildingNameController::class,
        BrandNameController::class,
        ProductNameController::class,
        ProcessNameController::class,
        RoomNameController::class,

        DeveloperLayerController::class,
        CommunityLayerController::class,
        BuildingLayerController::class,
        RoomLayerController::class,
        ProductLayerController::class,

        ProductInformationController::class,
    ];

    public static function method()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    public static function uri()
    {
        $uri = $_SERVER['REQUEST_URI'];
        return preg_replace('/^\/api\/*/', '', $uri);
    }

    public static function retrieveRoute($uri)
    {
        if (empty(static::$route)) {
            static::initRoute();
        }
        $method = static::method();
        foreach (static::$route as $key => $value) {
            $key = '/^' . str_replace('/', '\\/', $key) . '(\\?|$)/';
            if (!preg_match($key, $uri)) {
                continue;
            }
            if (!is_array($value[0])) {
                $value = [$value];
            }
            foreach ($value as $route) {
                if ($method === strtolower($route[0])) {
                    return [true, '匹配成功', [$route[1], $route[2]]];
                }
            }
        }
        return [false, 'api接口不存在(route is not exist)', ''];
    }

    protected static function initRoute()
    {
        $list = &static::$route;
        foreach (static::$rest as $cls) {
            $prefix = trim($cls::route(), '/');
            $list = array_merge($list, static::restRoute($prefix, $cls));
        }
    }

    protected static function restRoute($prefix, $className)
    {
        return [
            $prefix => [
                ['get', $className, 'index'],
                ['post', $className, 'insert'],
            ],
            $prefix . '/\d{1,8}' => [
                ['get', $className, 'querySearch'],
                ['put', $className, 'update'],
                ['delete', $className, 'delete'],
            ],
        ];
    }
}