class OrdersController < ApplicationController

	respond_to :json

	def index
		user = User.find(params[:user_id])
		respond_with user.orders
	end

	def create
		user = User.find(params[:user_id])
		order = user.orders.build(order_params)
		if order.save
			render json: order
		else
			render json: { message: "Validation failed", errors: order.errors }, status: 400
		end
	end

	def show
		user = User.find(params[:user_id])
		order = user.orders.find(params[:id])
		render json: order
	end

	def destroy
		user = User.find(params[:user_id])
		user.orders.find(params[:id]).destroy
		respond_with Order.all
	end


	private

	def order_params
		attributes = [
			:title,
			:body,
			:status
		]
		params.require(:order).permit(attributes)
	end


end
