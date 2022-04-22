
<div class="row-manual">
Seismology and silly tech solutions. Basis in Earth Science and Bayesian Statistics. 100% rambling.


</div>

{% for post in site.categories.blog %}
    <div>
        <a href="{{ post.url }}" ><img src="{{ post.thumbnail }}" />
        <a href="{{ post.url }}" >{{ post.title }}</a>
    </div>
{% endfor %}