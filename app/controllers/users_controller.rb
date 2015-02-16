class UsersController < ApplicationController
	respond_to :json

	def index
		respond_with User.all
	end

	def create
		user = User.new(user_params)
		if user.save
			render json: user
		else
			render json: { message: "Validation failed", errors: user.errors }, status: 400
		end
	end

	def show
		user = User.find(params[:id])
		render json: user
	end

	def destroy
		User.find(params[:id]).destroy
		respond_with User.all
	end


	private

	def user_params
		attributes = [
			:name,
			:sex,
			:priority
		]
		params.require(:user).permit(attributes)
	end
end
