<h1 align="center">Messenger</h1>
<h3 align="center">Тестовое задание на должность - Фронтенд разработчик React в GREEN-API</h3>
  
<img src="https://sun9-13.userapi.com/impg/STRBg1vMypb-w57Bd3tpIoUgBQrRbmL1TDQIxQ/7Zuke_JKCuE.jpg?size=989x777&quality=96&sign=0e91d493b680bd0d6bba8eb9e7ff83c1&type=album">

## Описание
Мессенджер на базе GREEN API.


## О проекте
В приложении реализованы сервер и клиент. 
Сервер принимает данные с GREEN API и передаёт их на клиент по установленному Websocket соединению через websocket.io. 
На серве фильтруются данные и передаются в компоненты клиента.



## Как использовать
Для входа в приложение введите Имя и данные инстанса из GEEN API:

IdInstance в поле Id, 
ApiTokenInstance в поле Token

Эти данные так же будут хранится в Local Storage.

Слева отображаются все входящие сообщения.

Чтобы начать чат с пользователем введите его номер телефона.

Клиент отправит номер телефона собеседника на сервер и сохранит для последующих запросов отправки сообщений, и вывода входящих сообщений от текущего собеседника.



## Установка проекта
Сервер использует пор 5000

Запускаем сервер 

```
cd .\serv\
npm install
npm start

```

Запускаем клиент

```
cd .\green\
npm install
npm start

```


