
/* wifi_proxy change
[Script]
SSID助手 = debug=1,script-path=https://raw.githubusercontent.com/rainman0925/GFW/master/Surge/Scripts/wifi_proxy.js,type=event,event-name=network-changed,control-api=true

PS:记得自己修改WIFI名称
主要功能:指定Wi-Fi(路由器翻)下,Surge使用直连模式,其他网络下Surge使用规则模式
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效
*/

var wifiname = $network.wifi.ssid;
var proxywifi = ["宇宙引力波广播分站","Lim5"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");
		
		setTimeout(function(){$notification.post("SSID助手","目前连接WIFI"+wifiname,"Surge更改为直连模式");}, 3000);
		break;
		
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		
		setTimeout(function(){$notification.post("SSID助手","Surge更改为规则模式","");}, 3000);
	
	}
	
	
};
$done();
