#pragma strict

public var player : Transform;

function Update () {
	transform.position = new Vector3(player.position.x + 6, 0, -10);
}