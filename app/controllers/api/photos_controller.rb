class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all.order(created_at: :desc)
  end

  def show
    @photo = Photo.find_by_id(params[:id])
  end

  def create
    @photo = Photo.new (photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])

    if @photo.destroy
      render :index
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end
  
  private

  def photo_params
    params.require(:photo).permit(:url, :caption, :location)
  end

end
