#pragma strict
public var obj : GameObject[];
public var spawnMin : float = 1f;
public var spawnMax : float = 2f;

function Start () {
	Spawn();
}

function Spawn(){
	Instantiate(obj[Random.Range(0, obj.GetLength(0))], transform.position, Quaternion.identity);
	Invoke("Spawn", Random.Range(spawnMin, spawnMax));
}