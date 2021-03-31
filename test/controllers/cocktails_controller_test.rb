require "test_helper"

class CocktailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cocktail = cocktails(:one)
  end

  test "should get index" do
    get cocktails_url, as: :json
    assert_response :success
  end

  test "should create cocktail" do
    assert_difference('Cocktail.count') do
      post cocktails_url, params: { cocktail: { bottom: @cocktail.bottom, creator: @cocktail.creator, description: @cocktail.description, glass: @cocktail.glass, ice: @cocktail.ice, ingredients: @cocktail.ingredients, method: @cocktail.method, name: @cocktail.name, pending: @cocktail.pending, request_type: @cocktail.request_type, rinse: @cocktail.rinse } }, as: :json
    end

    assert_response 201
  end

  test "should show cocktail" do
    get cocktail_url(@cocktail), as: :json
    assert_response :success
  end

  test "should update cocktail" do
    patch cocktail_url(@cocktail), params: { cocktail: { bottom: @cocktail.bottom, creator: @cocktail.creator, description: @cocktail.description, glass: @cocktail.glass, ice: @cocktail.ice, ingredients: @cocktail.ingredients, method: @cocktail.method, name: @cocktail.name, pending: @cocktail.pending, request_type: @cocktail.request_type, rinse: @cocktail.rinse } }, as: :json
    assert_response 200
  end

  test "should destroy cocktail" do
    assert_difference('Cocktail.count', -1) do
      delete cocktail_url(@cocktail), as: :json
    end

    assert_response 204
  end
end
