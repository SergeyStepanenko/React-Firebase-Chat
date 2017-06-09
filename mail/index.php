<?
    $to = 'sap@norbit.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Заявка на ТЕСТ-ДРАЙВ с http://hybris-norbit.ru/'; //Загаловок сообщения
    $name = strip_tags($_POST['name']);
    $phone = strip_tags($_POST['phone']);
    $mail = strip_tags($_POST['email']);
    $company = strip_tags($_POST['company']);

    $message = '
    <html>
    <head>
    <title>'.$subject.'</title>
    </head>
    <body>
    <p>Имя: '.$name.'</p>
    <p>Телефон: '.$phone.'</p>
    <p>Email: '.$mail.'</p>
    <p>Компания: '.$company.'</p>
    </body>
    </html>'; //Текст нащего сообщения можно использовать HTML теги

    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя

    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    echo $name;
?>
