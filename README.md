<h1 align="center">MESSENGER</h1>
<h3 align="center">Тестовое задание на должность - Фронтенд разработчик React в GREEN-API</h3>
  
<img src="https://sun9-76.userapi.com/impg/kKo8i8bmwH_-wRZ12d1vhXTZEs8WwJPs02Sskg/ZvrSONXoN20.jpg?size=1919x976&quality=96&sign=98eb1750c422ebdeb3a8fa225aacf62a&type=album">

## Описание
Мессенджер на базе GREEN API.

## О проекте
В приложении реализованы сервер и клиент.

Поддержка входящих/исходящих WhatsApp уведомлений.

Сервер принимает данные с GREEN API и передаёт их на клиент по установленному Websocket соединению.

На сервере фильтруются данные и передаются в компоненты клиента.

## Как использовать
Для входа в приложение введите:

Имя и данные инстанса из GEEN API

IdInstance в поле Id

ApiTokenInstance в поле Token

<img src="https://sun9-9.userapi.com/impg/5cNLTAFjp1xjf_hFKIOV0IxqIxgluPOeb6JHew/J_tewLX_KSs.jpg?size=928x711&quality=96&sign=e65aac440717531131733a905cb131ef&type=album">

Эти данные будут хранится в Local Storage.


Слева отображаются все входящие сообщения.

<img src="https://sun9-38.userapi.com/impg/NZYd6DTwiZhwZup5nc5V6jkO5VwYLw01Th6Kig/l7hVvxh1GvA.jpg?size=476x463&quality=96&sign=30e944045d8f0f55d33c3182538b871e&type=album">

Чтобы начать чат с пользователем введите его номер телефона.

<img src="https://sun9-80.userapi.com/impg/rGgSw0il-sD0HIASSVgdxYv8q2BfBghMlLhzHA/YdYrwIJipv0.jpg?size=1430x121&quality=96&sign=cabfd59305e31bb6fa623dbacd2b1d8d&type=album">

Клиент отправит номер телефона собеседника на сервер и сохранит для последующих запросов отправки сообщений, и вывода входящих сообщений от текущего собеседника.

Теперь мы можем отправлять сообщения. Отправленное сообщение пользователь получит в свой WhatsApp.

<img src="https://sun9-49.userapi.com/impg/5DZszklAYf83-DjZVTGcFkK5L8yTbALDwjtCdA/IWxjrhbHI1U.jpg?size=1427x122&quality=96&sign=abdc76b3a82210d0cdd21bc07864f4e6&type=album">

В чат будут приходить сообщения из WhatsApp.

<img src="https://sun9-65.userapi.com/impg/1yhj3ENDHTvCbKCGKjT-lh3Hpc_P0ydJTM212w/V0LES5nWfyQ.jpg?size=1439x766&quality=96&sign=52b856b7f9b7bc212cb139cc03c230c8&type=album">

## Установка проекта

Сервер слушает порт 5000

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
