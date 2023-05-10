
var body = JSON.parse($response.body);
var obj = {
    "unreadMessageCount": 0, 
    "androidAppLatestVersion": 77, 
    "iosAppLatestVersion": "3.36", 
    "dailyPlayAwardCoupon": null, 
    "referralRewardCoupon": null, 
    "displayName": "jake11", 
    "gender": "f", 
    "avatar": "//cdn.yopu.co/img/default-avatar.9190c675.svg", 
    "havatar": "//cdn.yopu.co/img/default-avatar.9190c675.svg", 
    "location": "地球", 
    "score": 0, 
    "level": 3, 
    "creationTime": 1642604471760, 
    "loginId": "cell:18408112388", 
    "isMember": true, 
    "isMembershipAutoRenewal": true, 
    "adsDisabled": true, 
    "adsDisabledTill": 1717923143000, 
    "ladder": "member", 
    "hasPassword": true, 
    "cell": "184***2388", 
    "hasRealId": false, 
    "hasWX": false, 
    "hasQQ": false, 
    "hasWeibo": false, 
    "hasApple": false, 
    "hasOnlyWeibo": false, 
    "userCode": "XYn3bLrP"
};

$done({ body: JSON.stringify(obj) });
