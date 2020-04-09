from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import OrderProduct, Order
from .serializers import OrderSerialzer


class OrderAPIView(GenericAPIView):

    serializer_class = OrderSerialzer

    def post(self, request):

        try:
            products = []
            total_price = 0
            compact_products = request.data.pop('compact_products')
            total_count = len(compact_products)

            for compact_prod in compact_products:
                order_product = OrderProduct(count=compact_prod['count'])
                order_product.product_id = compact_prod['id']
                order_product.save()
                total_price += order_product.product.price * order_product.count
                products.append(order_product)

            order = Order(
                **request.data,
                total_count=total_count,
                total_price=total_price,
            )
            order.save()
            order.products.set(products)

            return Response({'success':True}, 200)
        except Exception as exc:
            return Response({'error':True, 'message': str(exc)}, 400)

        
