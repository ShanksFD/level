# Generated by Django 3.2 on 2021-05-21 20:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('paymentMethod', models.CharField(blank=True, max_length=200, null=True)),
                ('taxPrice', models.DecimalField(blank=True, decimal_places=2, max_digits=7)),
                ('shippingPrice', models.DecimalField(blank=True, decimal_places=2, max_digits=7)),
                ('totalPrice', models.DecimalField(blank=True, decimal_places=2, max_digits=7)),
                ('isPaid', models.BooleanField(default=False)),
                ('paidAt', models.DateTimeField(auto_now_add=True)),
                ('isDelivered', models.BooleanField(default=False)),
                ('deliveredAt', models.DateTimeField(auto_now_add=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
