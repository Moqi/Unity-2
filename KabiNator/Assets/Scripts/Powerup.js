#pragma strict

var hud : HUDScript;

function OnTriggerEnter2D(other : Collider2D){
	if(other.tag == "Player"){
		hud = GameObject.Find("MainCamera").GetComponent(HUDScript);
		hud.IncreaseScore(10);
		Destroy(this.gameObject);
	}
}