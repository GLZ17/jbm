<?php


namespace querySearch\common;

use common\Instance;
use validator\common\Len;

abstract class BaseQuerySearch extends Instance
{
    use Len;

    protected $namePageIndex = 'pageIndex';
    protected $defaultPageIndex = 1;
    protected $namePageSize = 'pageSize';
    protected $defaultPageSize = 10;
    protected $namePageNumber = 'pageNumber';
    protected $defaultPageNumber = 5;


    abstract protected function search();

    protected function initInteger($name, $default)
    {
        $value = $this->extractFromQuerySearch($name, $default);
        if ($default !== $value && !!$value && preg_match('/^\d{1,8}$/', $value)) {
            $value = +$value;
        } else {
            $value = $default;
        }
        return max($value, 1);
    }

    protected function extractFromQuerySearch($name, $default)
    {
        return $_GET[$name] ?? $default;
    }

    public function pageIndex()
    {
        return [$this->namePageIndex, $this->initInteger($this->namePageIndex, $this->defaultPageIndex)];
    }

    public function pageSize()
    {
        return [$this->namePageSize, $this->initInteger($this->namePageSize, $this->defaultPageSize)];
    }

    public function pageNumber()
    {
        return [$this->namePageNumber, $this->initInteger($this->namePageNumber, $this->defaultPageNumber)];
    }

    public function namePageIndex()
    {
        return $this->namePageIndex;
    }

    public function namePageSize()
    {
        return $this->namePageSize;
    }
}