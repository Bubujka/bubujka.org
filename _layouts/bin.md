---
layout: default
title_format: bin
---
<div id="post" class='post'>
  <h1>Скрипты {{ page.name }}</h1>
  {% include tags.html obj=page %}
  <br>
  <div class='hr'></div>
  <p>
    {{page.title}}
  </p>

  {{ content }}

  <div class="noforum">
    <div class="right">
      {% include copy-button.html %}
    </div>
    <div class="right">
      <a class='' href="https://github.com/Bubujka/bu.bin/blob/master/bin/{{page.name}}">Посмотреть на github</a>
    </div>
  </div>

  {% assign refssize = page.refs | size %}
  {% if refssize != 0 %}
    <h2>Используемые команды</h2>
    <ul>
      {% for ref in page.refs %}
        {% for v in site.bin %}
          {% if v.name == ref %}
            <li>
              {% include bin-link.html obj=v %}
            </li>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </ul>
  {% endif %}
</div>

{% include comments.html %}
