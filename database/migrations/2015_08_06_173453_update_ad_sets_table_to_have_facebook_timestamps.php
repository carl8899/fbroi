<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateAdSetsTableToHaveFacebookTimestamps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ad_sets', function (Blueprint $table) {
            $table->timestamp('fb_created_at')->default('0000-00-00 00:00:00');
            $table->timestamp('fb_updated_at')->default('0000-00-00 00:00:00');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ad_sets', function (Blueprint $table) {
            $table->dropColumn('fb_created_at');
            $table->dropColumn('fb_updated_at');
        });
    }
}
