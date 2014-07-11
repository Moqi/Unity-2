#pragma strict

function OnTriggerEnter2D(other : Collider2D){
	if(other.tag == "Player"){
		Application.LoadLevel(1);
		return;
	}
	if(other.gameObject.transform.parent){
		Destroy(other.gameObject.transform.parent.gameObject);
	} else {
		Destroy(other.gameObject);
	}
}