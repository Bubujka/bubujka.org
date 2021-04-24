<!DOCTYPE html>
<html>
<head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8" />
   <title>Скрипты → {{ page.name }}</title>
   <link rel="stylesheet" href="/css/syntax.css" type="text/css" />
   <link rel="stylesheet" href="/css/screen.css" type="text/css" media="screen, projection" />
   <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css">
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
</head>
<body>

<div class="site">
  <div class="title">
    <a href="/">Все записи</a>
  </div>

  <style>
  .hljs{
    padding: 10px 20px;
    background: #FEFBF3;
    border: 1px solid rgba(0,0,0,.2);
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.1);
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    border-radius: 3px;
  }
  </style>
  <script>
  const copyToClipboard = function(){
    const el = document.createElement('textarea');
    el.value = document.querySelector("code").textContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    document.querySelector('#notify').innerHTML = 'Скопировано';
    setTimeout(function(){
      document.querySelector('#notify').innerHTML = '';
    }, 2000);
  };
  </script>
  <div id="post" class='post'>
    <h1>Скрипты {{ page.name }}</h1>
    {% for tag in page.tags %}
      #{{tag}}
    {% endfor %}
    <div class='hr'></div>
    <p>
      {{page.title}}
    </p>

    {{ content }}
    <br>
    <br>
    <button class='noforum' onclick="copyToClipboard()">Скопировать в буфер обмена</button>
    <div id='notify'></div>
  </div>

  {% include comments.html %}
  <script>hljs.highlightAll();</script>

</div>
</body>
</html>
