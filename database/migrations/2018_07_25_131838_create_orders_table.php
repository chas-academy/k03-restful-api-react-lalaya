<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('status');
            $table->date('order_created');
            $table->string('order_process');
            $table->date('delivered');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('street');
            $table->string('postcal_code');
            $table->string('city');
            $table->string('country');
            $table->string('phone');
            $table->decimal('discount')->nullable();
            $table->decimal('shipping_cost')->nullable();
            $table->string('shipping_method');
            $table->string('payment_method');
            $table->longText('note_to_customer_service')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
