package jalview.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class LaunchUtils
{

  public static void loadChannelProps(File dir)
  {
    ChannelProperties.loadProps(dir);
  }

  private static Properties userPreferences = null;

  public static String getUserPreference(String key)
  {
    if (userPreferences == null)
    {
      String channelPrefsFilename = ChannelProperties
              .getProperty("preferences.filename");
      if (channelPrefsFilename == null)
      {
        return null;
      }
      File propertiesFile = new File(System.getProperty("user.home"),
              channelPrefsFilename);
      if (!propertiesFile.exists())
      {
        return null;
      }
      try
      {
        userPreferences = new Properties();
        userPreferences.load(new FileInputStream(propertiesFile));
      } catch (FileNotFoundException e)
      {
        // didn't find user preferences file
        return null;
      } catch (IOException e)
      {
        System.err.println(e.getMessage());
        return null;
      }
    }
    return userPreferences.getProperty(key);
  }

  public static boolean getBooleanUserPreference(String key)
  {
    return Boolean.parseBoolean(getUserPreference(key));
  }
}
