# Generated by Django 3.1.1 on 2021-06-18 04:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ORM', '0004_auto_20210615_1729'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group',
            old_name='title',
            new_name='name',
        ),
    ]