package yapps.plugins.FeedReader;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class FeedReader extends CordovaPlugin {
    private static final String TAG = "FeedReader";
    
    public void initialize(CordovaInterface cordova, CordovaWebView webView){
        super.initialize(cordova,webView);
        Lod.d(TAG,"Initializing FeedReader");
    }
    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {

        if (action.equals("reed")) {

            return true;

        } else {
            
            return false;

        }
    }
}
