# Generated by Django 3.2.25 on 2024-07-20 05:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='complete',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='transaction_id',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
