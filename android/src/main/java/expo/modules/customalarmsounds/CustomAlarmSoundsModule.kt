package expo.modules.customalarmsounds

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import android.provider.AlarmClock
import android.app.AlarmManager
import android.content.Intent
import android.content.Context

import android.provider.Settings

class CustomAlarmSoundsModule : Module() {
    override fun definition() = ModuleDefinition {
    Name("CustomAlarmSounds")

    Function ("setAlarm") { hour: Int, minute: Int, artist: String, url: String ->
      return@Function createAlarm(hour, minute, artist, url)
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun createAlarm(hour: Int, minute: Int, artist: String, uri: String) {
    val intent: Intent = Intent(AlarmClock.ACTION_SET_ALARM);
    intent.putExtra(AlarmClock.EXTRA_HOUR, hour);
    intent.putExtra(AlarmClock.EXTRA_MINUTES, minute);
    intent.putExtra(AlarmClock.EXTRA_MESSAGE, artist);
    intent.putExtra(AlarmClock.EXTRA_RINGTONE, uri);

    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

    context.startActivity(intent);
  }
}
