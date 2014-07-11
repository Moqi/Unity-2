    #pragma strict
     
    // change the class name here to the name of your script, e.g.
    // public class ThisIsTheScriptNameHere extends MonoBehaviour
     
    public class MusicSingleton extends MonoBehaviour
    {
    private static var instance : MusicSingleton;
     
    function Awake()
    {
    if (instance != null && instance != this)
    {
    Destroy( this.gameObject );
    return;
    }
    else
    {
    instance = this;
    }
     
    DontDestroyOnLoad( this.gameObject );
    }
     
    // also change this to your script name
    // public static function GetInstance() : ThisIsTheScriptNameHere
     
    public static function GetInstance() : MusicSingleton
    {
    return instance;
    }
     
    function Update()
    {
    //
    }
    }