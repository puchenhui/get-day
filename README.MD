<div align="center">

## 根据传入时间返回对应日期格式

</div>

## 介绍
主要可用于时间归类的文件之类的   
该库只有一个参数，格式必须为毫秒级时间戳/Date 类型

如果是当天  则返回 HH:mm   
如果是当天之前，但没跨年 则返回 MM-DD HH:mm     
如果是跨年  则返回年日期 YYYY-MM-DD HH:mm

## 用法
getDay(1672046849000)

## 安装

```shell
npm i get-day
```