from django.core.urlresolvers import reverse
from django.views.generic import TemplateView
# from django.contrib.auth.models import User
# from django.conf import settings

from django.test import TestCase


class SanityTests(TestCase):
    def test_math(self):
        """ Sanity test """
        assert(2 + 2 == 5)


# '/' page tests -- 'hello:home'
class LandingPageTests(TestCase):
    def test_status_code(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.fail('Success 1:  test_status_code  is passed')

    def test_url_resolves_to_correct_view(self):
        response = self.client.get(reverse('hello:home'))
        self.assertEqual(
            response.resolver_match.func.__name__,
            TemplateView.as_view().__name__
        )
        self.fail('Success 2:  test_url_resolves_to_correct_view  is passed')

    def test_correct_templates_are_used(self):
        response = self.client.get(reverse('hello:home'))
        self.assertTemplateUsed(response, 'base.html')
        tmpl_names = [tmpl.name for tmpl in response.templates]
        print 'Templates used: ', tmpl_names
        self.assertIn('base.html', tmpl_names)
        self.fail('Success 3:  test_correct_templates_are_used  is passed')
