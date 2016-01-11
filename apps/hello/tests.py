from django.test import TestCase

# Create your tests here.


class SanityTests(TestCase):
    def test_math(self):
        """ Sanity test """
        assert(2 + 2 == 5)
