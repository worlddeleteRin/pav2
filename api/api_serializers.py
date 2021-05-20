def serialize_products(products_raw):
	ser_products = []
	pr_image_url = '/static/images/products/'
	for product in products_raw:
		pr = {
			"id": product.id,
			"price": product.price,
			"name": product.name,
			"category_id": product.category.id,
			"h_out": product.h_out,
			"h_in": product.h_in,
			"floor": product.floor,
			"interier": product.interier,
			"eksterier": product.eksterier,
			"electrik": product.electrik,
			"doors": product.doors,
			"images": [],
		}
		for image in product.itemimage_set.all():
			im = {
				"id": image.id,
				"item_id": image.item.id,
				"imgsrc": pr_image_url + image.imgurl.url,
			}
			pr['images'].append(im)
		ser_products.append(pr)
	return ser_products
	
