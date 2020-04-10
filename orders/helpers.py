import os
import requests
# https://api.telegram.org/bot<yourtoken>/getUpdates

TELEGRAM_BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')
CHAT_ID = os.getenv('CHAT_ID')
TEMPLATE = 'https://api.telegram.org/bot{token}/sendMessage?chat_id={chat_id}&parse_mode=Markdown&text={message}'
MESSAGE_TEMPLATE = '''
Ім\'я:{name}
Номер телефону:{phone}
Адреса:{address}
Регіон:{region}
Комент:{comment}
Тип оплати:{payment_type}
Загальна кількість:{total_count}
Сума:{total_price}
ЧасДата:{created_at}
Список продуктів:
{products}
'''
PRODUCT_TEMPLATE = '{name} X {count} = {price}\n'

def send_message(order):
    products_list_str = ''

    for product_order in order.products.all():
        product_str = PRODUCT_TEMPLATE.format(
            name=product_order.product.name,
            count=product_order.count,
            price=product_order.product.price * product_order.count,
        )
        products_list_str += product_str

    message = MESSAGE_TEMPLATE.format(
        name=order.user_name,
        phone=order.phone_number,
        address=order.address,
        region=order.region_normal,
        comment=order.comment,
        payment_type=order.payment_method_normal,
        created_at=order.created_at,
        total_count=order.total_count,
        total_price=order.total_price,
        products=products_list_str,
    )

    response = requests.get(TEMPLATE.format(token=TELEGRAM_BOT_TOKEN, chat_id=CHAT_ID, message=message))

    if not response.json()['ok']:
        raise Exception('Message was not delivered')
