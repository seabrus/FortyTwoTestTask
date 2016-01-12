from django.conf.urls import include, url
from django.views.generic import TemplateView
# from django.contrib.auth.decorators import login_required
# from django.contrib.auth.decorators import permission_required
# from rest_framework.urlpatterns import format_suffix_patterns
# from . views import CompanyList, HoursList, CompanyProfile


urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='base.html'), name='home'),
]

# urlpatterns = format_suffix_patterns(urlpatterns)
