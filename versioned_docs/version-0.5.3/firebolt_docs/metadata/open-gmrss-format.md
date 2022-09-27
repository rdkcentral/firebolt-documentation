# Open GMRSS Specifications
This document outlines the specifications of a GMRSS feed and what elements are required or optional. 

## Basic structure of a GMRSS feed

``` 
<rss xmlns:media="http://search.yahoo.com/mrss/" 
                xmlns:gmrss="urn:uri:merlin-gold-FIXME" 
                xmlns:dcterms="http://purl.org/dc/terms/" 
                version="2.0"> 
  <channel> 
    ... 
    <item> <!-- One or more items for each logical video asset --> 
      ... 
      <media:group> <!-- One media group per item --> 
        <media:content> <!-- One content entry for each playable video stream --> 
          ... 
        </media:content> 
        ... 
      </media:group> 
    </item> 
  </channel> 
</rss> 
```

## Field Maps
The tables below will provide you with the various required fields used within your GMRSS feed.


#### ```<rss>``` elements

| Field  | Required  | Attributes  | Description |
|:-------|:----------|:------------|:------------|
| rss  | required  | xmlns:media  xmlns:gmrss  xmlns:dcterms | Open Ingest GMRSS uses the namespaces:   - xmlns:media="http://search.yahoo.com/mrss/" – Yahoo's MRSS spec   - xmlns:gmrss="urn:uri:merlin-gold-FIXME" – Merlin's GMRSS spec   - xmlns:dcterms="http://purl.org/dc/terms/" – Dublin Core Terms, used for availability time window standard   - RSS elements (version 2.0) |
| channel | required |||

 

#### ```<rss><channel>``` elements
| Field  | Required  | Attributes  | Description |
|:-------|:----------|:------------|:------------|
| title | required | | Contains title of the feed.
| description | required | type | Description of the feed.
| link | optional | | The URL corresponding to the channel.
| generator | optional || A string indicating the program used to generate the channel.
| item| required (list) | | Describes a single piece of logical content. This will be ingested into Merlin as a single Program and can contain multiple Media. Items can also define data to delete.

 

#### ```<rss><channel><item>``` elements
| Field  | Required  | Attributes  | Description |
|:-------|:----------|:------------|:------------|
| title | required| overrideCanonicalValue  lang| Contains title of the content.|
| description| required| type  overrideCanonicalValue  lang| Synopsis of the content.|
| author| optional|| Author of the content (email).|
| link| optional|| URL of the content webpage.|
| uri| optional|| URL of the content webpage.|
| gmrss:source| optional|| System that was the source of the item/content.|
| pubdate| optional|| Release date or original air date |
| releaseYear| optional|| Release year. Automatically populated from pubDate if not specified.|
| dcterms:valid| required|| Available and expiration date of the content. Can be used to express local time or universal time.|
| dcterms:accessRights| optional|| Access rights of the content.
| gmrss:videoAssetId| required for all non-SeriesMasters  | provider namespace| Provider ID of the video asset.|
| gmrss:durableAppId| required for all non-SeriesMasters  || Our user-friendly app identifier, should represent the specific app where this content is intended to be played.|
| gmrss:seriesAssetId| required for all SeriesMasters| provider namespace| ID of the SeriesMaster this item represents, so that Episodes in that series can be connected to it.|
| guid| optional| isPermaLink| Globally unique identifier of the video asset.|
| gmrss:entityType| required|| Type of Program that this video represents.|
| gmrss:entityReference| optional| provider  namespace  entityType  relationType| Reference to another entity (e.g. Movie, Episode, TvSeason, SeriesMaster).|
| gmrss:tagReference| optional| provider  namespace  type| The tagReference field can be used to create a TagAssociation.|
| gmrss:personReference| optional| provider  namespace  type  partName  rank  cameo| The personReference field can be used to create a Credit.|
| gmrss:sportsTeamReference| optional| provider  namespace  type  competition| The sportsTeamReference field can be used to create a ProgramTeamAssociation.|
| gmrss:sportsLeagueReference| optional| provider  namespace| The sportsLeagueReference field can be used to create a ProgramLeagueAssociation.|
| gmrss:seriesTitle| required for Episodes|| Contains the series title of the content. This will become the title of the Merlin Program for Episodes, if it is not matched to some other canonical Program metadata
| gmrss:videoForm| required|| Long or short.|
| gmrss:trickModesRestricted| optional|| This defines how navigation (fast forward, pause, rewind, jump) should be restricted during video playback.|
| gmrss:distributor| optional|| Distributor of the video asset.|
| gmrss:brand| optional| override| Brand (company) of the video asset; this is displayed on the entity page.|
| gmrss:catalog| optional|| Segments content into the catalogs within a provider.|
| gmrss:adult| optional|| Will set the program value to adult when true. Defaults to false|
| media:copyright| optional|| Copyright line for video asset.|
| media:restriction| optional|| Space separated list of restrictions (country codes), currently only used for country restrictions in gmrss.|
| media:category| optional|| Indication of the type of media content, and its particular contents. Saved as Merlin Program.category. Possible values are: Movie, Lifestyle, News, Music, Children's, Sports, Other.|
| media:keywords| optional|| Relevant keywords/tags describing the media.|
| media:rating| optional| scheme| This allows the permissible audience to be declared. If this element is not included, it assumes that no restrictions are necessary (suitable for all ages).|
| media:credit| optional| scheme  role  gmrss:namespace  gmrss:id| Notable entity and the contribution to the creation of the media object. GMRSS extensions allow ID mapping for easy connection to Merlin Person objects. Only used in program auto-matching, not for credit creation  |
| media:thumbnail| optional| url  width  height  format  type  provider  external| Images for the video or Program the video represents.|
| gmrss:episodeNumber| optional|| Episode number for episode entity metadata.|
| gmrss:seasonNumber| optional|| Season number for season entity metadata.|
| gmrss:liveWindowEnd| optional|| End date of live window asset.|
| gmrss:visibilityDate| optional|| Date when live video on demand content will surface.|
| gmrss:displayStartDate| optional|| Start date to be displayed live video on demand content.|
| gmrss:availabilityStatus| optional|| Status of content - values include Upcoming, Live, Concluded, Replay|
| gmrss:blackedOutPostalCode| optional|| Repeatable element containing each Postal Code to be blacked out.|
| media:status| optional| state  reason| Optional tag to specify the status of a media object – whether it's still active or it has been blocked/deleted.|
| media:chapter| optional| startTime  endTime  title  thumbnailUrl| Chapter information for asset.|
| gmrss:price| optional|| Represents price in String format in dollars.|
| gmrss:rentalPeriod| optional|| Represents rental period in days|
| gmrss:streamingClass| required|| Determines how content is treated in Last9.  For on demand content, set to OTTVOD.  For live, temporary content, set to EphemeralStream.  For live content on a persistent stream, set to ScheduledStream.
| gmrss:customField| optional| namespace  namespacePrefix  title  value| Custom field to set in Media object|
| gmrss:playerConfig| optional| key| Configuration parameters to support playback.|
| gmrss:contentRights| required|| Represents the locations and platforms that a piece of content is available in and also the necessary entitlement(s) to view the content.|
| gmrss:subjectToCoppa| optional|| Indicates whether COPPA - Children's Online Privacy Protection Act rules should be obeyed.
| gmrss:airingType| optional|| Airing type from listing. Required for SportingEvent, Live Programming and TV Series.|
| gmrss:languageDetails| optional| title  description  originalAudio  intendedAudience  originalTitle  episodeTitle| Allows content providers to explicitly define languageDetails for the video|
| gmrss:timeMarker| optional| offset  type  title| Create a time marker with the provided offset in milliseconds from the beginning of the asset|
| gmrss:timeSlice| optional| start  end  type  title| Create a time slice with the provided interval with start and end offsets in milliseconds from the beginning of the asset|
| gmrss:localizedTitle| optional| lang| localized title for the given language|
| gmrss:localizedDescription| optional| lang| localized description for the given language|
| media:group| required|| Allows grouping of ```<media:content>``` elements that are effectively the same content, yet different representations.|

 

#### ```<rss><channel><item><gmrss:contentRights>``` elements
| Field  | Required  | Attributes  | Description |
|:-------|:----------|:------------|:------------|
| gmrss:availabilityTag| required|| Specifies a location or territory where the content is available.|
| gmrss:catalog| required|| Specifies a platform from which the content can be consumed.|
| gmrss:entitlement| required|| Specifies an entitlement required to view the content.|
| gmrss:valid| optional|| Specifies the time window during which the contentRights object is applicable.                    

 

#### ```<rss><channel><item><media:group>``` elements
| Field  | Required  | Attributes  | Description |
|:-------|:----------|:------------|:------------|
| media:content| required| Required  gmrss:cc  gmrss:sap  gmrss:dvs  gmrss:expression  duration  url  gmrss:videoQuality  type  Optional  fileSize  medium  isDefault  bitrate  framerate  samplingRate  channels  height  width  lang  external  gmrss:subtitles  gmrss:assetType  | Describes one of the video representations of the asset. cc, sap, dvs, expression, url, duration, videoQuality required; subtitles recommended. All other attributes optional.|
| media:player| optional| url  height  width| Allows the media object to be accessed through a web browser media player console.|
| media:hash| optional| algo| This is the hash of the binary media file. It can appear multiple times as long as each instance is a different algo.|
| gmrss:videoCodec| optional|| String describing the video codec used for the video encoding.|
| gmrss:audioCodec| optional|| String describing the audio codec used for the video encoding.|
| gmrss:playerConfig| optional| key| Configuration parameters to support playback on content level.|
| gmrss:transferMode| optional|| Method of transfer. Defaults to "Streaming" if not provider|
| gmrss:transport| optional|| String describing transport used for the video encoding.|
| gmrss:protectionScheme| optional|| String describing the protection scheme used for the video encoding.|
| gmrss:protectionKey| optional|| String describing the protection key used for the video encoding.|
| gmrss:protectionSystem| optional|| String describing the protection system used for the video encoding.|
| gmrss:audioTrack| optional| lang  type  index  label  enabled  codec  audioType  dvs| Describes a single audio track, audio track metadata attributes are modeled after HTML5.|
| gmrss:subtitle| optional| type  gmrss:role  lang  encoding  href| Represents a single subtitle or cc track.|


 

## Field Examples


#### rss
``` 
<rss>
```

Open Ingest GMRSS uses the namespaces: 

* xmlns:media="http://search.yahoo.com/mrss/" – Yahoo's MRSS spec 
* xmlns:gmrss="urn:uri:merlin-gold-FIXME" – Merlin's GMRSS spec 
* xmlns:dcterms="http://purl.org/dc/terms/" – Dublin Core Terms, used for availability time window standard 
* and of course the classic RSS elements (version 2.0)


 

#### channel

``` 
<rss><channel> 
```


 

#### title 


``` 
<rss><channel><title> 
```

Contains the title of the feed. 


 

#### description 


``` 
<rss><channel><description type=""> 
```

Description of the feed 

Attributes: 
* type: optional MIME type of the text 


 

#### link 

``` 
<rss><channel><link> 
```

The URL corresponding to the channel. 


 

#### generator 


``` 
<rss><channel><generator> 
```

A string indicating the program used to generate the channel. 


 

#### item 


``` 
<rss><channel><item> 
```

Describes a single piece of logical content. This will be ingested into Merlin as a single Program and can contain multiple Media.


 

#### title 

``` 
<rss><channel><item><title overrideCanonicalValue="false"> 
```

Contains title of the content. This will become the title of the Merlin Program, if it is not matched to some other canonical Program metadata. In the case of episodes, this will become the episodeTitle of the Merlin Program. The title will be set using the seriesTitle field. 

Attributes: 
* type: optional MIME type of the text 
* overrideCanonicalValue: optional; default value is false 
* lang: optional unless overrideCanonicalValue=true 


 

#### description 


``` 
<rss><channel><item><description type="" overrideCanonicalValue="false"> 
```

Synopsis of the content 

Attributes: 
* type: optional MIME type of the text 
* overrideCanonicalValue: optional; default value is false 
* lang: optional unless overrideCanonicalValue=true 


 

#### author 

``` 
<rss><channel><item><author> 
```

Author of the content (email) 


 

#### link 


``` 
<rss><channel><item><link> 
```

URL of the content webpage 


 

#### uri 


``` 
<rss><channel><item><uri> 
```

URL of the content webpage 


 

#### gmrss:source 


``` 
<rss><channel><item><gmrss:source> 
```

System that was the source of the item/content. 


 

#### pubdate 


``` 
<rss><channel><item><pubdate> 
```

Release date or original air date. 


 

#### releaseYear 


``` 
<rss><channel><item><releaseYear> 
```

Release year. Automatically populated from pubDate if not specified. 


 

#### dcterms:valid 

``` 
<rss><channel><item><dcterms:valid> 
```

Available and expiration date of the content. Can be used to express local time or universal time: 

* Universal time: 

``` 
<dcterms:valid xmlns:dcterms="http://purl.org/dc/terms/">start=2002-10-13T09:00Z;end=2002-10-17T17:00Z;scheme=W3C-DTF</dcterms:valid> 
```

* Local time (Does not follow the W3C-DTF standard or include the time zone information)

``` 
<dcterms:valid xmlns:dcterms="http://purl.org/dc/terms/">start=2002-10-13T09:00;end=2002-10-17T17:00</dcterms:valid> 
```

 

 

#### dcterms:accessRights 


``` 
<rss><channel><item><dcterms:accessRights> 
```

Access rights of the content. There can be any number of accessRights elements per one item. The createContentEntitlementsFor : ```<targetPartnerIdentifier>``` parameter must be set in the partner parameters for access rights to be set. The target partner must have the content partner's media account in it's set of mediaAccounts.

Attributes: 
* type: optional, type of access rights that is being referenced, either entitlement or availability. Defaults to entitlement if type is not provided. 


 

#### gmrss:videoAssetId 

``` 
<rss><channel><item><gmrss:videoAssetId provider="" namespace=""> 
```

Provider ID of the video asset. This becomes the seed ID of the Merlin Program that represents this video asset. There should be at most one videoAssetId. If videoAssetId is defined, seriesAssetId should not be defined. 

Attributes: 
* provider: required, provider of the id and id namespace. Consult the Merlin team to make sure the provider specified is configured for OpenIngest. 
* namespace: optional, namespace where the id is unique – within Merlin this is concatenated together with videoAssetId to form a guid such as "watchable:12345". This should be used if multiple ID spaces exist within the same provider to guarantee uniqueness. 


 

#### gmrss:durableAppId

``` 
<rss><channel><item><gmrss:durableAppId>*valueHere*</gmrss:durableAppId></item></channel></rss> 
```

Our user-friendly app identifier, which should represent the specific app where this content is intended to be played. This should be an exact match to the Application.durableAppId field. Your partner manager can provide this to you. 

 

 

#### gmrss:seriesAssetId 

``` 
<rss><channel><item><gmrss:seriesAssetId provider="" namespace=""> 
```

ID of the SeriesMaster this item represents, so that Episodes in that series can be connected to it. This becomes the seed ID of the Merlin Program that represents this SeriesMaster. There should be at most one seriesAssetId. If seriesAssetId is defined, videoAssetId should not be defined. 

Attributes: 
* provider: required, provider of the id and id namespace. Consult the Merlin team to make sure the provider specified is configured for OpenIngest. 
* namespace: optional, namespace where the id is unique – within Merlin this is concatenated together with seriesAssetId to form a guid such as "watchable:12345". This should be used if multiple ID spaces exist within the same provider to guarantee uniqueness. 

Other items in the GMRSS feed can reference this item using the gmrss:entityReference element. 

For example, a SeriesMaster will have the following elements: 

``` 
<gmrss:seriesAssetId provider="watchable" namespace="watchable">11021</gmrss:seriesAssetId> 

<gmrss:entityType>SeriesMaster</gmrss:entityType> 
```

And an episode in that series will have the following elements: 
``` 
<gmrss:entityReference provider="watchable" namespace="watchable" entityType="SeriesMaster">11021</gmrss:entityReference> 

<gmrss:entityType>Episode</gmrss:entityType> 
```


 

#### guid 


``` 
<rss><channel><item><guid isPermalink=""> 
```

Globally unique identifier of the video asset. It carries the same id value (with namespace) as the videoAssetId element. 

Attributes: 
* isPermaLink: if true id is in URL form 



 

#### gmrss:entityType 

``` 
<rss><channel><item><gmrss:entityType> 
```

Type of video. Legal types are Merlin Program types: Movie, Episode, SeriesMaster, SportingEvent, Other, Preview, Advertisement, MusicVideo, Extra. 

If the entityType=SeriesMaster, the element is considered a series and should not have any video content (no videoAssetId or media:group elements). Other items in the GMRSS feed can reference this item using the gmrss:entityReference element. For example, a SeriesMaster will have the following elements: 

``` 
<gmrss:seriesAssetId provider="watchable" namespace="watchable">11021</gmrss:seriesAssetId> 

<gmrss:entityType>SeriesMaster</gmrss:entityType> 
```

while an episode in that series will have these elements: 

``` 
<gmrss:entityReference provider="watchable" namespace="watchable" entityType="SeriesMaster">11021</gmrss:entityReference> 

<gmrss:entityType>Episode</gmrss:entityType> 
```


 

#### gmrss:videoAssetReference 

``` 
<rss><channel><item><gmrss:videoAssetReference> 
```

Reference to a video asset that this asset was derived from, for example: a reference to a main movie asset for a preview asset. 

Attributes: 
* provider: required, provider of the asset id 
* namespace: required, namespace of the asset id 
* relationType: optional, Merlin RelatedProgram type: HasTrailer, HasMakingOf, HasSpinoff, HasDerivation, IsSpoof, HasSimilarTheme, HasSimilarFeel, IsSimilar, IsRemake, IsSequel, IsFeatured, SharesCast, IsRelated, IsInfluenced, HasMinisode, HasExtra, IsFranchise, IsSeriesSpecial, IsCrossover, IsAudioVersion, HasAlternateAudio. 


 

#### gmrss:entityReference 

``` 
<rss><channel><item><gmrss:entityReference> 
```

Reference to an entity (e.g. Movie, Episode, TvSeason, SeriesMaster). There can be many entity reference per one item. The value of the entity reference is an entity ID in a specific namespace. The entityReference field can be used to link an Episode to a SeriesMaster. 

Attributes: 
* provider: required, provider of the ID and namespace 
* namespace: optional, namespace where the ID is unique 
* entityType: required, entity type that this reference points to (example: SeriesMaster) 
* relationType: optional, relationship with the referenced entity (related program types and special value "self") 

For example, a SeriesMaster will have the elements: 
``` 
<gmrss:seriesAssetId provider="watchable" namespace="watchable">11021</gmrss:seriesAssetId> 

<gmrss:entityType>SeriesMaster</gmrss:entityType> 
```
and an Episode in that series will have the elements: 
``` 
<gmrss:entityReference provider="watchable" namespace="watchable" entityType="SeriesMaster">11021</gmrss:entityReference> 

<gmrss:entityType>Episode</gmrss:entityType> 
```


 

#### gmrss:tagReference 

``` 
<rss><channel><item><gmrss:tagReference> 
```

Reference to a tag. There can be many tag references per one item. The value of the tag reference is a tag ID in a specific namespace. The tagReference field can be used to create a TagAssociation. 
If an optional attribute type is provided, also the referred tag will be created if it does not exist. The attribute will be only effective if the ingesting partner 
has the parameter createTags set to true. 

Attributes: 
* provider: required, provider of the ID and namespace 
* namespace: optional, namespace where the ID is unique 
* type: optional, type of the tag to create. Allowed values are ProviderEditorial,ProviderPlacement 



 

#### gmrss:personReference 

``` 
<rss><channel><item><gmrss:personReference> 
```

Reference to a person. There can be many person references per one item. The value of the person reference is a person ID in a specific namespace. The personReference field can be used to create a Credit. 

Attributes: 
* provider: required, provider of the ID and namespace 
* namespace: optional, namespace where the ID is unique 
* type: required, type field on the Credit 
* partName: optional, partName field on the Credit 
* rank: optional, rank field on the Credit 
* cameo: optional, cameo field on the Credit 



 

#### gmrss:sportsTeamReference 

``` 
<rss><channel><item><gmrss:sportsTeamReference> 
```

Reference to a sportsTeam. There can be many sportsTeam references per one item. The value of the sportsTeam reference is a sportsTeam ID in a specific namespace. The sportsTeamReference field can be used to create a ProgramTeamAssociation. 

Attributes: 
* provider: required, provider of the ID and namespace 
* namespace: optional, namespace where the ID is unique 
* type: required, homeAway field on the ProgramTeamAssociation (Home, Away, Neutral) 
* competition: required, competion field on the ProgramTeamAssociation (true/false) 

 

#### gmrss:sportsLeagueReference 


``` 
<rss><channel><item><gmrss:sportsLeagueReference> 
```

Reference to a sportsLeague. There can be many sportsLeague references per item. The value of the sportsLeague reference is a sportsLeague ID in a specific namespace. The sportsLeagueReference field can be used to create a ProgramLeagueAssociation. 

Attributes: 
* provider: required, provider of the ID and namespace 
* namespace: optional, namespace where the ID is unique 



 

#### gmrss:seriesTitle 

``` 
<rss><channel><item><gmrss:seriesTitle> 
```

Contains the series title of the content. This will become the title of the Merlin Program for Episodes, if it is not matched to some other canonical Program metadata. The episode title can be set using the title field. 


 

#### gmrss:videoForm 

``` 
<rss><channel><item><videoForm> 
```

Valid values: long or short. 



 

#### gmrss:trickModesRestricted 


``` 
<rss><channel><item><gmrss:trickModesRestricted> 
```

This defines how navigation (fast forward, pause, rewind, jump) should be restricted during video playback. Comma separated list of restricted trick modes. Values: 

Values: 
* RW 
* FF 
* Pause 



 

#### gmrss:distributor 

``` 
<rss><channel><item><gmrss:distributor> 
```

Distributor of the video asset. An example from traditional ADI VOD would be distributor=indemand and brand=NBC Universal. An example from an OTT provider would be distributor=Netflix and brand=NBC Universal. This will be saved as a Merlin ProgramMediaAssociation.companies entry with role=Distributor. 



 

#### gmrss:brand 


``` 
<rss><channel><item><gmrss:brand> 
```

Brand of the video asset. An example from traditional ADI VOD would be distributor=indemand and brand=NBC Universal. An example from an OTT provider would be distributor=Netflix and brand=NBC Universal. This will be saved as a Merlin ProgramMediaAssociation.companies entry with role=Provider. 

Also supports "merlin:```<companyId>```" instead of Brand name. 

Note: Default way openIngest will populate the company on media is through the Partner's configured vodIngestCompanyId. If that is not provided or the brand's override is set to true, the brand will be used. 

Attributes: 
* override: if true, will use brand over configured partner's vodIngestCompanyId 



 

#### gmrss:catalog 


``` 
<rss><channel><item><gmrss:catalog> 
```

Labels a video asset with one or more catalogs, so there could be more than one ```<gmrss:catalog>``` elements per item. Catalog is specific to a partner. 



 

#### gmrss:adult 

``` 
<rss><channel><item><gmrss:adult> 
```

Will set the program value to adult when true. Will be false if false or not set 



 

#### media:copyright 

``` 
<rss><channel><item><media:copyright> 
```

Copyright information for the asset. 
Example: 

``` 
<media:copyright url="">2012 A&E Television Networks</media:copyright> 
```

Attributes: 
* url: optional, url to the specific copyright terms 

 


 

#### media:restriction 


``` 
<rss><channel><item><media:restriction> 
```

Space separated list of restrictions (country codes), currently only used for country restrictions in gmrss. 

Example: 

``` 
<media:restriction type="country" relationship="deny">FR</media:restriction> 
```

Attributes: 
* relationship: optional, allow or deny, optional only if the value is none or all 
* type: required, country 




 

#### media:category 

``` 
<rss><channel><item><media:category> 
```

Indication of the type of media content, and its particular contents. Saved as Merlin Program.category. Possible values are: Movie, Lifestyle, News, Music, Children's, Sports, Other. 

Example: 

``` 
<media:category scheme="http://schemes.xfinity.com/video/category" label="">Other</media:category> 
```

Attributes: 
* scheme 
* label 



 

#### media:keywords 

``` 
<rss><channel><item><media:keywords> 
```

Relevant keywords/tags describing the media. 



 

#### media:rating 


``` 
<rss><channel><item><media:rating scheme=""> 
```

This allows the permissible audience to be declared. If this element is not included, it assumes that no restrictions are necessary (suitable for all ages). 

Attributes: 
* scheme: required; can be mpaa, v-chip, ccnr.ca, cmpda.ca, or another value from http://web.theplatform.com/descriptors/ratings/ratingMap.txt. 




 

#### media:credit 


``` 
<rss><channel><item><media:rating scheme="" role="" gmrss:namespace="" gmrss:id=""> 
```

Notable entity and the contribution to the creation of the media object. GMRSS extensions allow ID mapping for easy connection to Merlin Person objects. 
Only used in program auto-matching, not for credit creation 

Attributes: 
* scheme: optional 
* role: optional 
* gmrss:namespace optional, namespace for credit reference ID 
* gmrss:id optional, for credit reference 




 

#### media:thumbnail 


``` 
<rss><channel><item><media:thumbnail url="" width="" height="" format="" type="" provider="" external=""> 
```

Images for the video or Program the video represents. Note that any size is permissible, but sizes should align with the platform's supported sizes otherwise invalid sized images may be ignored. The image URL must be internet accessible so that the platform's image resizing service, Myriad, can retrieve it and store it to our CDN. 

attributes: 
* url: required, url of the image, should be reachable on general internet 
* width: required, width of the image 
* height: required, height of the image 
* format: required, format of the image, currently only jpeg is supported 
* type: required, type designation of the image, such as 'Poster Art' – see SourceImageType endpoint for full list. 
* provider: optional, defaults to THIRD_PARTY. Defines the feed provider type of the Image in the Merlin ingest system. This is used by Myriad for image priority and selection. 
* external: optional, defaults to false. If false, Myriad will download the image once a month and store it locally for resizing. If true, Myriad will not download the image, and the source image will be retrieved when the image TTL is reached on our CDN (approximately 30 minutes). This allows an image update to the same URL to take effective as frequently as every 30 minutes but the URL must remain available and be able to handle traffic load from Myriad. 




 

#### gmrss:episodeNumber 

``` 
<rss><channel><item><gmrss:episodeNumber> 
```

Episode number for episode entity metadata. 



 

#### gmrss:seasonNumber 


``` 
<rss><channel><item><gmrss:seasonNumber> 
```

Season number for season entity metadata. 
  



 

#### gmrss:liveWindowEnd 


``` 
<rss><channel><item><gmrss:liveWindowEnd> 
```

End date of live window asset. 
The date must be absolute; it must have timezone set or Z (example: 2017-10-13T09:00Z) 




 

#### gmrss:visibilityDate 


``` 
<rss><channel><item><gmrss:visibilityDate> 
```

Date when content will live video on demand content will surface. 
The date must be absolute; it must have timezone set or Z (example: 2017-10-13T09:00Z) 




 

#### gmrss:displayStartDate 


``` 
<rss><channel><item><gmrss:displayStartDate> 
```

Start date to be displayed live video on demand content. 
The date must be absolute; it must have timezone set or Z (example: 2017-10-13T09:00Z) 

 


 

#### gmrss:availabilityStatus 


``` 
<rss><channel><item><gmrss:availabilityStatus> 
```

Options are: 
* Upcoming 
* Live 
* Concluded 
* ConcludedWithReplay 
* Delayed 
* Cancelled 
* Replay (for VOD) 



 

#### gmrss:blackedOutPostalCode 


``` 
<rss><channel><item><gmrss:blackedOutPostalCode> 
```

Repeatable element containing each Postal Code to be blacked out. 



 

#### media:status 


``` 
<rss><channel><item><media:status> 
```

Optional tag to specify the status of a media object -- whether it's still active or it has been blocked/deleted. 

Attributes: 
* state: required, can have values "active", "blocked","deleted", or "inactive". "active" means a media object is active in the system, "blocked" means a media object is blocked by the publisher, "deleted" means a media object has been deleted by the publisher, "inactive" means that the media should be unapproved. Deleted and inactive can be sparse updates, but inactive must be a full object on create. 
* reason: optional, values: add, update, sparse update, fileUpdate, programOnly 

 

##### programOnly notes 

This reason will only write a Program and its associated metadata. 

It will write 
* Program 
* TagAssociations 
* Credits 
* ImageAssociations 
* SportsLeagueAssociations 
* SportsTeamAssociations 

It will not write 
* Media 
* ProgramMediaAssociation 
* ContentAvailability 
* ContentEntitlement 
* TimeSlices 



 

#### media:chapter 

``` 
<rss><channel><item><media:chapter> 
```

Optional chapter information for asset 

Example: 

``` 
<media:chapterstartTime="5000" endTime="10000" title="chapter1" thumbnailUrl="www.google.com/thumb1"/> 
```

Attributes: 
* startTime: starting point in ms for chapter 
* endTime: ending point in ms for chapter 
* title: optional, name of chapter 
* thumbnailUrl: optional, url location for thumbnail of chapter 



 

#### gmrss:playerConfig 

Configuration parameters to support playback. Each configuration parameter is its own playerConfig element. 

``` 
<rss><channel><item><gmrss:playerConfig> 
```

Example:

``` 
<gmrss:playerConfig key="ad_server_content_id">something</gmrss:playerConfig> 
```

Attributes: 
* key: the name of the configuration parameter. Currently only ad_server_content_id parameter is allowed 



 

#### gmrss:contentRights 


``` 
<rss><channel><item><gmrss:contentRights> 
```

Defines rights management restrictions for the content. This element can be used to limit the content to a specific location (country, territory, etc) or a specific platform. The contentRights element can also be used to bind the content to a specific entitlement. The contentRights element must contain an availabilityTag, catalog pairing, and an entitlement. It can be scoped to a specific time window using the valid element, which has the same syntax as dcterms:valid. If windows are the same, it is preferred to use dcterms:valid. 

Examples: 

Setting localization and platform 
```
<gmrss:contentRights> 

    <gmrss:availabilityTag>USA</gmrss:availabilityTag> 

    <gmrss:catalog>All platforms</gmrss:catalog> 

</gmrss:contentRights> 
```

Setting entitlement during a given time window 
``` 

<gmrss:contentRights> 

    <gmrss:entitlement>Syfy</gmrss:entitlement> 

    <gmrss:valid>start=2019-02-22T00:00;end=2019-02-28T23:59Z;scheme=W3C-DTF</gmrss:valid> 

</gmrss:contentRights> 
```


 

#### gmrss:subjectToCoppa 


``` 
<rss><channel><item><gmrss:subjectToCoppa> 
```

A boolean that indicates whether COPPA - Children's Online Privacy Protection Act - rules should be obeyed. This impacts the amount of data that should be sent to the DAI platform during playback for Ad selection. 
When this boolean is true, it basically means that the intended audience for the program is children, therefore additional COPPA privacy rules should be enforced. 

Possible values could be "true" or "false". 

Example: 

Setting subject to COPPA to true 

``` 
<gmrss:subjectToCoppa>true</gmrss:subjectToCoppa> 
```


 

#### gmrss:airingType 


``` 
<rss><channel><item><gmrss:airingType> 
```

Airing type from listing. Valid values are New, Live, Repeat, Taped, and null value. Required for SportingEvent, Live Programming and TV Series. 



 

#### gmrss:availabilityTag 


``` 
<rss><channel><item><gmrss:contentRights><gmrss:availabilityTag> 
```

A reference to an AvailabilityTag that exists in Merlin in order to limit content access to the given region. The string used should match AvailabilityTag.externalIdentifier in Merlin within that content partner's Merlin account space. 



 

#### gmrss:catalog 


``` 
<rss><channel><item><gmrss:contentRights><gmrss:catalog> 
```

A reference to a catalog (ProductContext) in Merlin in order to limit content access to a specific platform. The string used should match the ProductContext.title field in Merlin within a content partner's Merlin account space. 



 

#### gmrss:entitlement 


``` 
<rss><channel><item><gmrss:contentRights><gmrss:entitlement> 
```

A reference to an Entitlement in order to limit the ability to play content to a specific content level entitlement. The string used should match Entitlement.externalIdentifier and can match Entitlements across all Partner account spaces. 



 

#### gmrss:valid 


``` 
<rss><channel><item><gmrss:contentRights><gmrss:valid> 
```

The time window for when a piece of content is available, using the same format as the dcterms:valid element. Can use either local or absolute time. Example: "start=2019-02-22T00:00;end=2019-02-28T23:59Z;scheme=W3C-DTF" 
Multiple elements can be provided. 

In case of entitlement, only one availability window will be stored with minimal available date and maximal expiration date across all provided availability windows 
until full support for availability windows will be implemented. 



 

#### media:group 


``` 
<rss><channel><item><media:group> 
```

Allows grouping of ```<media:content>``` elements that are effectively the same content, yet different representations. This translates into MediaFiles in the MPX world. 



 

#### media:content 

``` 
<rss><channel><item><media:group><media:content url="" fileSize="" type="" medium="" isDefault="" expression="" bitrate=""  

framerate="" samplingrate="" channels="" duration="" height="" width=""  

lang="" external="" gmrss:cc="" gmrss:subtitles="" gmrss:sap="" gmrss:dvs=""  

gmrss:videoQuality="" gmrss:expression=""> 
```

Represents physical video content. Key attributes to include are url and gmrss:videoQuality. 

Attributes: 
* url: should specify the direct URL to the media object. If not included, a ```<media:player>``` element must be specified. 

**New Format**
``` 
xre://core/launchapp?{appId,launchpoint,entityId,assetId,assetType,sectionName,launchedFrom,contentUrl} 
```

**Legacy Format**
``` 
appmanager:launchApplication#appId=nothotdog&additionalLaunchParams=%7B%22param.launchpoint%22%3A%22playback%22%2C%22param.assetId%22%3A%22123456%22%2C%22isAsset%22%3A%22true%22%7D 
```

* fileSize: is the number of bytes of the media object. It is an optional attribute. 
* type: is the standard MIME type of the object. It is required and can be defaulted to HTML. 
* medium: is the type of object (image | audio | video | document | executable). While this attribute can at times seem redundant if type is supplied, it is included because it simplifies decision making on the reader side, as well as flushes out any ambiguities between MIME type and object type. It is an optional attribute. 
* isDefault: determines if this is the default object that should be used for the ```<media:group>```. There should only be one default object per ```<media:group>```. It is an optional attribute. 
* expression: determines if the object is a sample, the full version of the object, or a continuous stream (sample | full | nonstop). Default value is "full". It is a required attribute. 

Possible values: 
* full : full version of the object, can rewind or start from the beginning 
* nonstop: continuous stream, cannot rewind or start from the beginning (resume point is now) 
* sample 
* bitrate: is the kilobits per second rate of media. It is an optional attribute. 
* framerate: is the number of frames per second for the media object. It is an optional attribute. 
* samplingrate: is the number of samples per second taken to create the media object. It is expressed in thousands of samples per second (kHz). It is an optional attribute. 
* channels: is the number of audio channels in the media object. It is an optional attribute. 
* duration: is the number of seconds the media object plays. It is an optional attribute. 
* height: is the height of the media object. It is an optional attribute. 
* width: is the width of the media object. It is an optional attribute. 
* lang: is the primary language encapsulated in the media object. Language codes possible are detailed in RFC 3066. This attribute is used similar to the xml:lang attribute detailed in the XML 1.0 Specification (Third Edition). It is an optional attribute. 
* external: optional, is the media external content - true/false, defaults to false unless content type is HTML 
* gmrss:cc: required, closed captioning -true/false 
* gmrss:subtitles: optional, true/false 
* gmrss:sap: required, additional language audio tracks - true/false 
* gmrss:dvs: required, descriptive video services, additional audio track describing video - true/false 
* gmrss:videoQuality: required, sd/hd/threeD/uhd 
* gmrss:expression: optional, - full/nonstop 



 

#### media:player 


``` 
<rss><channel><item><media:group><media:content><media:player url="" height="" width=""> 
```

Allows the media object to be accessed through a web browser media player console. This element is required only if a direct media url attribute is not specified in the ```<media:content>``` element. It has one required attribute and two optional attributes. 

Attributes: 
* url: the URL of the player console that plays the media. It is a required attribute. 
* height: the height of the browser window that the URL should be opened in. It is an optional attribute. 
* width: the width of the browser window that the URL should be opened in. It is an optional attribute. 



 

#### media:hash 


``` 
<rss><channel><item><media:group><media:content><media:hash algo=""> 
```

This is the hash of the binary media file. It can appear multiple times as long as each instance is a different algo. 

Attributes: 
* algo: hash algorithm e.g. md5, required attribute 


 

#### gmrss:videoCodec 


``` 
<rss><channel><item><media:group><media:content><media:videoCodec> 
```

String describing the video codec used for the video encoding. 



 

#### gmrss:audioCodec 


``` 
<rss><channel><item><media:group><media:content><media:audioCodec> 
```

String describing the audio codec used for the video encoding. If it is present, codec attribute is ignored in all audioTrack elements. 



 

#### gmrss:playerConfig on content 

Configuration parameters to support playback on content level. Each configuration parameter is its own playerConfig element. 
``` 
<rss><channel><item><media:group><media:content><gmrss:playerConfig> 
```

Example: 

``` 
<gmrss:playerConfig key="ad_compatibility_encoding_profile">something</gmrss:playerConfig> 
```

Attributes: 
* key: the name of configuration parameter. Currently, only ad_compatibility_encoding_profile parameter is allowed 



 

#### gmrss:transport 


``` 
<rss><channel><item><media:group><media:content><media:transport> 
```

String describing the transport used for the video encoding. 



 

#### gmrss:transferMode 


``` 
<rss><channel><item><media:group><media:content><media:transferMode> 
```

String describing the mode of transfer. If not provided, default value of "Streaming" will be used 

Possible values: 
* Streaming 
* Download 
* Any 
* None 



 

#### gmrss:protectionScheme 

``` 
<rss><channel><item><media:group><media:content><media:protectionScheme> 
```

String describing the protection scheme used for the video encoding. 



 

#### gmrss:protectionKey 


``` 
<rss><channel><item><media:group><media:content><media:protectionKey> 
```

String describing the protection key used for the video encoding. 



 

#### gmrss:protectionSystem 


``` 
<rss><channel><item><media:group><media:content><media:protectionSystem> 
```

String describing the protection system used for the video encoding. 



 

#### gmrss:audioTrack 


``` 
<rss><channel><item><media:group><media:content><gmrss:audioTrack lang="" type="" index="" label="" enabled="" codec="" audioType="" dvs=""> 
```

Describes a single audio track, audio track metadata attributes are modeled after HTML5. 

Attributes: 
* lang: required. follows ISO-639-1 (2 or 5 character) 
* type: optional, main/translation 
* index: required, integer 
* label: optional 
* enabled: optional, true/false 
* codec: optional 
* audioType: required, eg "Stereo", "Mono" 
* dvs: optional, true/false, indicates Descriptive Video Service track 



 

#### media:subTitle 

``` 
<rss><channel><item><media:group><media:content><gmrss:subtitle type="" gmrss:role="" lang="" encoding="" href=""> 
```

Represents a single subtitle or closed captions (cc) track. Subtitles are the translations of words which are spoken on-screen in different language (ie: Someone speaking Spanish in a movie and english translation appears as text at the bottom of the screen). Closed Captioning (CC) is for hearing impaired and includes sound descriptions (ie: Door creaking, footsteps getting louder)

Attributes: 
* type: optional, mime type of timed text 
* gmrss:role: required, cc/subtitle 
* lang: required 
* encoding: optional 
* href: optional 



 

#### gmrss:assetType 


``` 
<rss><channel><item><media:group><media:content><gmrss:assetType> 
```

String that represents a "tag" describing the video stream. 0 or more assetTypes are permitted in a media:content element. If none are provided, IpDeliveryVideo is used as the default assetType. All assetType strings must be pre-registered in MediaDS by the Merlin team before use in OpenIngest requests. Seeded into the unique constraint for content streams. Mainly useful in situations where the same video stream with the same encoding and DRM is hosted redundantly across multiple origins. 



 

#### gmrss:price 


``` 
<rss><channel><item><gmrss:price> 
```

Represents price in String format in dollars 



 

#### gmrss:rentalPeriod 

``` 
<rss><channel><item><gmrss:rentalPeriod> 
```

Represents rental period in days 



 

#### gmrss:streamingClass 

``` 
<rss><channel><item><gmrss:streamingClass> 
```

Streaming class for content. Used by XRE to determine how to handle content in Last9. Defaults to OTTVOD if not set. 

Possible values: 
* ScheduledStream 
* SecretSchedule 
* EphemeralStream 
* SpontaneousCast 
* SpecialCast 
* OTTVOD 
* VOD 



 

#### gmrss:customField 


``` 
<rss><channel><item><gmrss:customField title="" namespace="" namespacePrefix="" value=""> 
```

Custom field to use in Media object 

Attributes: 
* namespace: required, the namespace URI of the custom field to add 
* namespacePrefix: required 
* title: required, name of the field 
* value: required 



 

#### gmrss:languageDetails 

``` 
<rss><channel><item><gmrss:languageDetails title="" description="" originalAudio="" intendedAudience="" originaltitle="" episodeTitle="" 
```

LanguageDetails to use on the program 

Attributes: 
* title: Describes the program title language 
* description: Program description language 
* originalAudio: Language for the originalAudio 
* intendedAudience: IntendedAudience language 
* originalTitle: Language of the originalTitle 
* episodeTitle: EpisodeTitle language 



 

#### gmrss:timeMarker 


``` 
<rss><channel><item><gmrss:timeMarker offset="740" type="EndOfOpeningCredits" title="End of Credits" /> 
```

Create a time marker with the provided offset in milliseconds from the beginning of the asset. Multiple elements can be provided. 

Attributes: 
* offset: required, offset in milliseconds from the beginning of the asset file 
* type: required, type of the time marker 
* title: optional, title of the time marker 



 

#### gmrss:timeSlice 


```
gmrss:timeMarker
<rss><channel><item><gmrss:timeSlice start="740" end="840" type="Clip" title="Weekend Update" /> 
```

Create a time slice with the provided interval with start and end offsets in milliseconds from the beginning of the asset. 
Multiple elements can be provided. 

Attributes: 
* start: required, start offset in milliseconds from the beginning of the asset file 
* end: required, end offset in milliseconds from the beginning of the asset file 
* type: required, type of the time slice 
* title: optional, title of the time slice 



 

#### gmrss:localizedTitle 


``` 
<rss><channel><item><gmrss:localizedTitle lang="es">Value</gmrss:localizedTitle> 
```

Localized title for the asset and given language. It can be repeated. 

Attributes: 
* lang: required 


 

#### gmrss:localizedDescription 


``` 
<rss><channel><item><gmrss:localizedDescription lang="es">Value</gmrss:localizedDescription> 
```

Localized description for the asset and given language. It can be repeated. 

Attributes: 
* lang: required 

 

## OpenIngest Response Object 

The OpenIngest response XML object contains details about the outcome of the OpenIngest call.  The call will return a 200 success even if ingest failures occur, so the caller must inspect the response to verify the success of the operation.  The "failed" boolean is intended as a quick check value to use in failure reporting client-side.  outcomeInfo is a map that will include an entry for each Item in the ingested feed.  It is possible that some assets may successfully ingest while others fail, and outcomeInfo should be used to identify the failing asset(s) when failed=true. 

  

#### openIngestResponse Fields 
| Field| Type| Description|
|:-----|:----|:-----------|
| outcomeInfo  | Map<OpenIngestAssetId, AssetIngestResult>  | map of input assetIds to results (both successes and failures are reported. |
| failed| Boolean| True if at least 1 Item experienced a "hard" failure|

  

#### OpenIngestAssetId fields 

|Field| Type| Description|
|:-----|:----|:-----------|
| value | String | the unique identifier of the Item |
| namespace | String | typically same as the provider
| provider | String | Content provider (ie: "Netflix")

  

#### AssetIngestResult fields 

| Field| Type| Description|
|:-----|:----|:-----------|
| outcome| Enum| one of: "processed", "failed", "processedWithErrors" or "skipped"|
| failureInfo  | OpenIngestFailureInfo  | details about the failure, only set if the request failed or was processedWithErrors  |

  

#### OpenIngestFailureInfo fields 

| Field| Type| Description|
|:-----|:----|:-----------|
| failedURI  | URI     | optional, set if some referenced object is identified as the cause of the failure.              |
| reason     | String  | a description of the failure                                                                    |
| info       | String  | optional addition details explaining the failure                                                |
| phase      | enum    | one of: "CreateProgramInfo", "IngestProgram", "CreateIngestMedia", "IngestMedia", "CallIngest"  |

 

##### Example Response 
OpenIngest Response 

```
<ns2:openIngestResponse xmlns:ns2="http://xml.theplatform.com/web/tv/mmp"> 

   <ns2:return ns2:index="0"> 

      <ns2:instanceType>com.theplatform.web.tv.mmp.api.OpenIngestResult</ns2:instanceType> 

      <ns2:Fields> 

         <ns2:Field ns2:index="1"> 

            <ns2:instanceType>java.util.HashMap</ns2:instanceType> 

            <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestResult.outcomeInfo</ns2:name> 

            <ns2:value xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ns2:memberMarshallingObject" ns2:length="2"> 

               <ns2:Fields> 

                  <ns2:Field ns2:position="0" ns2:index="2"> 

                     <ns2:instanceType>java.util.Map$Entry</ns2:instanceType> 

                     <ns2:name>java.util.HashMap.entry</ns2:name> 

                     <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                        <ns2:Fields> 

                           <ns2:Field ns2:index="3"> 

                              <ns2:instanceType>com.theplatform.web.tv.mmp.api.OpenIngestAssetId</ns2:instanceType> 

                              <ns2:name>java.util.Map$Entry.key</ns2:name> 

                              <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                                 <ns2:Fields> 

                                    <ns2:Field ns2:index="4"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.value</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">199582</ns2:value> 

                                    </ns2:Field> 

                                    <ns2:Field ns2:index="5"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.namespace</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">Amazon</ns2:value> 

                                    </ns2:Field> 

                                    <ns2:Field ns2:index="6"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.provider</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">Amazon</ns2:value> 

                                    </ns2:Field> 

                                 </ns2:Fields> 

                              </ns2:value> 

                           </ns2:Field> 

                           <ns2:Field ns2:index="7"> 

                              <ns2:instanceType>com.theplatform.web.tv.mmp.api.AssetIngestResult</ns2:instanceType> 

                              <ns2:name>java.util.Map$Entry.value</ns2:name> 

                              <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                                 <ns2:Fields> 

                                    <ns2:Field ns2:index="8"> 

                                       <ns2:instanceType>com.theplatform.web.tv.mmp.api.AssetIngestResult$Outcome</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.AssetIngestResult.outcome</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">processed</ns2:value> 

                                    </ns2:Field> 

                                 </ns2:Fields> 

                              </ns2:value> 

                           </ns2:Field> 

                        </ns2:Fields> 

                     </ns2:value> 

                  </ns2:Field> 

                  <ns2:Field ns2:position="1" ns2:index="9"> 

                     <ns2:instanceType>java.util.Map$Entry</ns2:instanceType> 

                     <ns2:name>java.util.HashMap.entry</ns2:name> 

                     <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                        <ns2:Fields> 

                           <ns2:Field ns2:index="10"> 

                              <ns2:instanceType>com.theplatform.web.tv.mmp.api.OpenIngestAssetId</ns2:instanceType> 

                              <ns2:name>java.util.Map$Entry.key</ns2:name> 

                              <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                                 <ns2:Fields> 

                                    <ns2:Field ns2:index="11"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.value</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">199583</ns2:value> 

                                    </ns2:Field> 

                                    <ns2:Field ns2:index="12"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.namespace</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">Amazon</ns2:value> 

                                    </ns2:Field> 

                                    <ns2:Field ns2:index="13"> 

                                       <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestAssetId.provider</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">Amazon</ns2:value> 

                                    </ns2:Field> 

                                 </ns2:Fields> 

                              </ns2:value> 

                           </ns2:Field> 

                           <ns2:Field ns2:index="14"> 

                              <ns2:instanceType>com.theplatform.web.tv.mmp.api.AssetIngestResult</ns2:instanceType> 

                              <ns2:name>java.util.Map$Entry.value</ns2:name> 

                              <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                                 <ns2:Fields> 

                                    <ns2:Field ns2:index="15"> 

                                       <ns2:instanceType>com.theplatform.web.tv.mmp.api.AssetIngestResult$Outcome</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.AssetIngestResult.outcome</ns2:name> 

                                       <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">failed</ns2:value> 

                                    </ns2:Field> 

                                    <ns2:Field ns2:index="16"> 

                                       <ns2:instanceType>java.util.ArrayList</ns2:instanceType> 

                                       <ns2:name>com.theplatform.web.tv.mmp.api.AssetIngestResult.failureInfo</ns2:name> 

                                       <ns2:value xsi:type="ns2:memberMarshallingObject" ns2:length="1"> 

                                          <ns2:Fields> 

                                             <ns2:Field ns2:position="0" ns2:index="17"> 

                                                <ns2:instanceType>com.theplatform.web.tv.mmp.api.OpenIngestFailureInfo</ns2:instanceType> 

                                                <ns2:name>java.util.ArrayList.entry</ns2:name> 

                                                <ns2:value xsi:type="ns2:genericMarshallingObject"> 

                                                   <ns2:Fields> 

                                                      <ns2:Field ns2:index="18"> 

                                                         <ns2:instanceType>java.lang.String</ns2:instanceType> 

                                                         <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestFailureInfo.reason</ns2:name> 

                                                         <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">Failed to ingest media for mediaGuid: Amazon:199583; details: Ingest Failure: MediaFiles: #1: com.theplatform.module.exception.ValidationException: The following asset types were not found: 'badType'. Asset types need to be pre-defined in the media data service to be applied to media files.</ns2:value> 

                                                      </ns2:Field> 

                                                      <ns2:Field ns2:index="19"> 

                                                         <ns2:instanceType>com.theplatform.web.tv.mmp.api.OpenIngestFailure</ns2:instanceType> 

                                                         <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestFailureInfo.phase</ns2:name> 

                                                         <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xsi:type="xs:string">IngestMedia</ns2:value> 

                                                      </ns2:Field> 

                                                   </ns2:Fields> 

                                                </ns2:value> 

                                             </ns2:Field> 

                                          </ns2:Fields> 

                                       </ns2:value> 

                                    </ns2:Field> 

                                 </ns2:Fields> 

                              </ns2:value> 

                           </ns2:Field> 

                        </ns2:Fields> 

                     </ns2:value> 

                  </ns2:Field> 

               </ns2:Fields> 

            </ns2:value> 

         </ns2:Field> 

         <ns2:Field ns2:index="20"> 

            <ns2:instanceType>java.lang.Boolean</ns2:instanceType> 

            <ns2:name>com.theplatform.web.tv.mmp.api.OpenIngestResult.failed</ns2:name> 

            <ns2:value xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">true</ns2:value> 

         </ns2:Field> 

      </ns2:Fields> 

   </ns2:return> 

</ns2:openIngestResponse> 
```
