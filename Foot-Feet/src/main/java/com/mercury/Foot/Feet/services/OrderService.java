package com.mercury.Foot.Feet.services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.mercury.Foot.Feet.beans.Order;
import com.mercury.Foot.Feet.beans.OrderProduct;
import com.mercury.Foot.Feet.beans.Product;
import com.mercury.Foot.Feet.daos.OrderDao;
import com.mercury.Foot.Feet.daos.OrderProductDao;
import com.mercury.Foot.Feet.daos.ProductDao;
import com.mercury.Foot.Feet.http.Response;

@Service
public class OrderService {
	@Autowired
	private OrderDao od;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private OrderProductDao orderProductDao;
	
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED)
	public Response save(Order order) {
		try {
			List<OrderProduct> purchases = order.getPurchases();
			order.setDate(new Date());
			purchases.forEach((orderProduct) -> {
				// enrich the product object
				Product product = (Product) productDao.findById(orderProduct.getProduct().getId()).get();
				orderProduct.setProduct(product);
				orderProduct.setOrder(order);
				
			});
			od.save(order);
			
			return new Response(true);
		} catch (Exception e) {
			return new Response(false);
		}
	}
	
	public List<Order> getByUserId(int id) {
		return od.findByUserId(id);
	}
	
	public List<Order> getAll(){
		return od.findAll();
	}
	
	
	
	
	public Response edit(Order order) {
		try {
			Order o = (Order) od.findById(order.getId()).get();
			List<OrderProduct> purchasesToRemove = o.getPurchases();
			
			List<OrderProduct> purchases = order.getPurchases();
			// handled update and add products in order
			purchases.forEach((orderProduct) -> {
				Product product = (Product) productDao.findById(orderProduct.getProduct().getId()).get();
				orderProduct.setProduct(product);
				orderProduct.setOrder(o);
			});
			
			// handle remove products in order
			if(purchases.size() > 0) {
				purchasesToRemove = purchasesToRemove.stream().filter((orderProduct) -> {
					return !purchases.contains(orderProduct);
				}).collect(Collectors.toList());
			}
			
			o.setPurchases(purchases);
			od.save(o);
			
			deleteOrderProducts(purchasesToRemove);	
						
			return new Response(true);
		} catch (Exception e) {
			System.out.println(e);
			return new Response(false);
		}
	}
	
	public void deleteOrderProducts(List<OrderProduct> purchases) {
		orderProductDao.deleteAll(purchases);	
	}
	
	
	
	
}
