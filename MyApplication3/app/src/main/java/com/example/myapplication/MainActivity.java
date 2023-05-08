package com.example.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.text.Editable;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.annotation.Nullable;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        System.out.println("onCreate...");
    }


    @Override
    protected void onStart() {
        super.onStart();
        System.out.println("onStart...");
    }

    @Override
    protected void onResume() {
        super.onResume();
        System.out.println("onResume...");
    }

    @Override
    protected void onPause() {
        super.onPause();
        System.out.println("onPause....");
    }

    @Override
    protected void onStop() {
        super.onStop();
        System.out.println("onStop....");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        System.out.println("onDestory...");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        System.out.println("onRestart....");
    }
}
