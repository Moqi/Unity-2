#pragma strict
private var playerScore : float = 0f;

function Update () {
	playerScore += Time.deltaTime;
}

function IncreaseScore(amount : int){
	playerScore += amount;
}

function OnDisable(){
	PlayerPrefs.SetInt("Score", Mathf.Round(playerScore * 10));
}

function OnGUI(){
	GUI.Label(new Rect(10, 10, 100, 30), "Score: " + Mathf.Round(playerScore * 10));
}