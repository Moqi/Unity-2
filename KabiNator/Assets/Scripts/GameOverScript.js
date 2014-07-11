#pragma strict

private var score : int = 0;

function Start(){
	score = PlayerPrefs.GetInt("Score");
}

function OnGUI(){
	GUI.Label(new Rect(Screen.width / 2 -20, 50, 80, 30), "Koniec gry");
	
	GUI.Label(new Rect(Screen.width / 2 -20, 300, 80, 30), "Punkty: " + score);
	
	if(GUI.Button(new Rect(Screen.width / 2 - 30, 350, 100, 30), "Powturzyć?"))
	{
		Application.LoadLevel(0);
	}
}