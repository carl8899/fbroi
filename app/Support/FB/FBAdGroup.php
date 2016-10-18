<?php

namespace App\Support\FB;

use App\Contracts\FB\FBObject;
use App\Support\FB\Traits\ConditionalInformationTrait;
use App\Support\FB\Traits\InsightableTrait;
use App\Support\FB\Traits\ModelableTrait;
use App\Support\FB\Traits\UpdateableTrait;
use FacebookAds\Object\AdGroup;
use FacebookAds\Object\Fields\AdGroupFields;

class FBAdGroup implements FBObject
{
    use ConditionalInformationTrait,
        InsightableTrait,
        ModelableTrait,
        UpdateableTrait;

    /**
     * @var AdGroup
     */
    private $adGroup;

    /**
     * Data needed for the campaign eloquent model.
     *
     * @var array
     */
    protected $model_field_mappings = [
        AdGroupFields::ID             => 'fb_ad_id',
        AdGroupFields::NAME           => 'name',
        AdGroupFields::ADGROUP_STATUS => 'status',
        AdGroupFields::CREATED_TIME   => 'fb_created_at',
        AdGroupFields::UPDATED_TIME   => 'fb_updated_at',
    ];

    /**
     * Mapping of eloquent to Facebook field mappings required
     * for the creation of a new Facebook Ad Group record.
     *
     * @var array
     */
    protected $model_to_facebook_field_mappings = [
        'name'   => AdGroupFields::NAME,
        'status' => AdGroupFields::ADGROUP_STATUS
    ];

    /**
     * Create new FBAdGroup instance.
     *
     * @param AdGroup $adGroup
     */
    public function __construct( AdGroup $adGroup )
    {
        $this->adGroup = $adGroup;
    }

    /**
     * Return the primary object.
     *
     * @return AdSet
     */
    public function getPrimaryObject()
    {
        return $this->adGroup;
    }
}