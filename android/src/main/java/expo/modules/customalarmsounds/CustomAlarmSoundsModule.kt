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

    Function ("setAlarm") {
      return@Function createAlarm()
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun requestAlarmPermissions() {}

  private fun createAlarm(): String {
    val intent: Intent = Intent(AlarmClock.ACTION_SET_ALARM);
    intent.putExtra(AlarmClock.EXTRA_HOUR, 1);
    intent.putExtra(AlarmClock.EXTRA_MINUTES, 1);

    intent.putExtra(AlarmClock.EXTRA_MESSAGE, "test alarm");

    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

    context.startActivity(intent);

    return "TEST"
  }
}
