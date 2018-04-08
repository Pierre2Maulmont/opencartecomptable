<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Open Carte Comptable</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Lora|Merriweather|Playfair+Display|Source+Serif+Pro" rel="stylesheet">
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5lRs-K-ynKO525aDEktx3uZI_8Oa2SQ8&" async defer></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
