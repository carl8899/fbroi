<?php 

namespace App\Support\FB;

use App\Contracts\FB\FBObject;
use App\Support\FB\Traits\ConditionalInformationTrait;
use App\Support\FB\Traits\InsertableTrait;
use App\Support\FB\Traits\InsightableTrait;
use App\Support\FB\Traits\ModelableTrait;
use App\Support\FB\Traits\UpdateableTrait;
use FacebookAds\Object\AdCampaign;
use FacebookAds\Object\Fields\AdCampaignFields;

class FBAdCampaign implements FBObject
{
    use ConditionalInformationTrait,
        InsertableTrait,
        InsightableTrait,
        ModelableTrait,
        UpdateableTrait;

    /**
     * @var AdCampaign
     */
    private $adCampaign;

    /**
     * Data needed for the campaign eloquent model.
     *
     * @var array
     */
    protected $model_field_mappings = [
        AdCampaignFields::ID           => 'fb_campaign_id',
        AdCampaignFields::NAME         => 'name',
        AdCampaignFields::STATUS       => 'status',
        AdCampaignFields::CREATED_TIME => 'fb_created_at',
        AdCampaignFields::UPDATED_TIME => 'fb_updated_at',
    ];

    /**
     * Mapping of eloquent to Facebook field mappings required
     * for the creation of a new Facebook Ad Campaign record.
     *
     * @var array
     */
    protected $model_to_facebook_field_mappings = [
        'name'   => AdCampaignFields::NAME,
        'status' => AdCampaignFields::STATUS
    ];

    /**
     * Create new FBAdCampaign instance.
     *
     * @param AdCampaign $adCampaign
     */
    public function __construct( AdCampaign $adCampaign )
    {
        $this->adCampaign = $adCampaign;
    }

    /**
     * Return the primary object.
     *
     * @return AdCampaign
     */
    public function getPrimaryObject()
    {
        return $this->adCampaign;
    }
}