<?php


namespace controller\common;

use config\Route;
use common\Message;
use common\Instance;

class BaseController extends Instance
{
    protected $message;

    public function __construct()
    {
        $this->message = Message::instance();
    }

    protected function response($status, $message, $data)
    {
        return [$status, $message, $data];
    }

    protected function pair($status, $data)
    {
        return [$status, $data];
    }

    protected function result($status, $data = '')
    {
        $method = Route::method();
        if (empty($data)) {
            $data = '';
        }
        $message = $this->message->$method($status);
        return $this->response($status, $message, $data);
    }

    protected function data($trim = true)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!is_array($data)) {
            $data = [];
        }
        if ($trim) {
            foreach ($data as $k => $v) {
                $data[$k] = trim($v);
            }
        }
        return $data;
    }
}