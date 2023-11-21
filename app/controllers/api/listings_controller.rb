class Api::ListingsController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def index
      @listings = Listing.all
      render :index
    end

    def create
      @listing = Listing.new(listing_params)

      if @listing.save
          render :show
      else
          render json: @listing.errors.full_messages, status: 422
      end
    end

    def show
        @listing = Listing.find(params["id"])
        @reviews = @listing.reviews
        render :show
    end

    private

    def listing_params
      params.require(:listing).permit(:title, :description, :price, :beds, :baths, :lat, :lng)
    end

  end
