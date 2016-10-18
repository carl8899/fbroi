<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'carts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'AdminAccount',
        'ApiPath',
        'ApiKey',
        'cart_id',
        'name',
        'store_key',
        'store_url',
        'user_id',
        'verify',
    ];

    /**
     * Return all categories of the cart.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function categories()
    {
        return $this->hasMany( CartCategory::class );
    }

    /**
     * Connect with Api2Cart Product Api.
     *
     * @return Support\Api2Cart\Category
     */
    public function connectWithApi2CartCategoryApi()
    {
        return new Support\Api2Cart\Category( $this->store_key );
    }

    /**
     * Connect with Api2Cart Product Api.
     *
     * @return Support\Api2Cart\Product
     */
    public function connectWithApi2CartProductApi()
    {
        return new Support\Api2Cart\Product( $this->store_key );
    }

    /**
     * Return the cart's products.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany( Product::class );
    }
}
