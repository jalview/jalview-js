package jalview.util;

import java.awt.Image;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.swing.ImageIcon;

public class ChannelProperties
{

  public static final String CHANNEL_PROPERTIES_FILENAME = "channel.props";

  private static Properties channelProps;

  private static final Properties defaultProps;

  private static Map<String, Image> imageMap = new HashMap<String, Image>();

  private static Map<String, URL> urlMap = new HashMap<String, URL>();

  private static final ArrayList<Image> iconList;

  static
  {
    defaultProps = new Properties();
    // these should be kept up to date, but in real life they should never
    // actually be used anyway.
    defaultProps.put("app_name", "Jalview");
    defaultProps.put("banner", "/default_images/jalview_banner.png");
    defaultProps.put("logo.16", "/default_images/jalview_logo-16.png");
    defaultProps.put("logo.32", "/default_images/jalview_logo-32.png");
    defaultProps.put("logo.38", "/default_images/jalview_logo-38.png");
    defaultProps.put("logo.48", "/default_images/jalview_logo-48.png");
    defaultProps.put("logo.64", "/default_images/jalview_logo-64.png");
    defaultProps.put("logo.128", "/default_images/jalview_logo-128.png");
    defaultProps.put("logo.256", "/default_images/jalview_logo-256.png");
    defaultProps.put("logo.512", "/default_images/jalview_logo-512.png");
    defaultProps.put("rotatable_logo.48",
            "/default_images/rotatable_jalview_logo-38.png");
    defaultProps.put("bg_logo.28", "/default_images/barton_group-28.png");
    defaultProps.put("bg_logo.30", "/default_images/barton_group-30.png");
    defaultProps.put("bg_logo.32", "/default_images/barton_group-32.png");
    defaultProps.put("uod_banner.28", "/default_images/UoD_banner-28.png");
    defaultProps.put("uod_banner.30", "/default_images/UoD_banner-30.png");
    defaultProps.put("uod_banner.32", "/default_images/UoD_banner-32.png");
    defaultProps.put("default_appbase",
            "https://www.jalview.org/getdown/release/1.8");
    defaultProps.put("preferences.filename", ".jalview_properties");

    // load channel_properties
    Properties tryChannelProps = new Properties();
    URL channelPropsURL = ChannelProperties.class
            .getResource("/" + CHANNEL_PROPERTIES_FILENAME);
    if (channelPropsURL == null)
    {
      // complete failure of channel_properties, set all properties to defaults
      System.err.println("Failed to find '/" + CHANNEL_PROPERTIES_FILENAME
              + "' file at '"
              + (channelPropsURL == null ? "null"
                      : channelPropsURL.toString())
              + "'. Using class defaultProps.");
      tryChannelProps = defaultProps;
    }
    else
    {
      try
      {
        InputStream channelPropsIS = channelPropsURL.openStream();
        tryChannelProps.load(channelPropsIS);
        channelPropsIS.close();
      } catch (IOException e)
      {
        System.err.println(e.getMessage());
        // return false;
      }
    }
    channelProps = tryChannelProps;

    /*
     * The following slight palava for caching an icon list is so that all sizes of icons
     * are the same. i.e. if there are /any/ channel_properties icons to use, then _only_
     * use those channel_properties icons, don't mix in class default icons for missing
     * sizes.  If there are _no_ (usable) channel icons then we can use the class default icons.
     */
    iconList = new ArrayList<Image>();
    List<String> sizes = Arrays.asList("16", "32", "48", "64", "128", "256",
            "512");
    for (String size : sizes)
    {
      Image logo = null;
      // not using defaults or class props first time through
      logo = ChannelProperties.getImage("logo." + size, null, false);
      if (logo != null)
      {
        iconList.add(logo);
      }
    }
    // now add the class defaults if there were no channel icons defined
    if (iconList.size() == 0)
    {
      for (String size : sizes)
      {
        Image logo = null;
        String path = defaultProps.getProperty("logo." + size);
        URL imageURL = ChannelProperties.class.getResource(path);
        ImageIcon imgIcon = imageURL == null ? null
                : new ImageIcon(imageURL);
        logo = imgIcon == null ? null : imgIcon.getImage();
        if (logo != null)
        {
          iconList.add(logo);
        }
      }
    }
  }

  protected static void loadProps(File dir)
  {
    File channelPropsFile = new File(dir, CHANNEL_PROPERTIES_FILENAME);
    if (channelPropsFile.exists())
    {
      try
      {
        InputStream is = new FileInputStream(channelPropsFile);
        channelProps.load(is);
      } catch (FileNotFoundException e)
      {
        System.err.println(e.getMessage());
      } catch (IOException e)
      {
        System.err.println(e.getMessage());
      }
    }
  }

  private static Properties channelProps()
  {
    return channelProps;
  }

  private static Map<String, Image> imageMap()
  {
    return imageMap;
  }

  private static Map<String, URL> urlMap()
  {
    return urlMap;
  }

  /*
   * getProperty(key) will get property value from channel_properties for key.
   * If no property for key is found, it will fall back to using the defaultProps defined for this class.
   */
  public static String getProperty(String key)
  {
    return getProperty(key, null, true);
  }

  /*
   * getProperty(key, defaultVal) will get property value from channel_properties for key.
   * If no property for key is found, it will return defaultVal and NOT fall back to the class defaultProps.
   */
  public static String getProperty(String key, String defaultVal)
  {
    return getProperty(key, defaultVal, false);
  }

  /*
   * internal method.  note that setting useClassDefaultProps=true will ignore the provided defaultVal
   */
  private static String getProperty(String key, String defaultVal,
          boolean useClassDefaultProps)
  {
    if (channelProps() != null)
    {
      if (channelProps().containsKey(key))
      {
        return channelProps().getProperty(key,
                useClassDefaultProps ? defaultProps.getProperty(key)
                        : defaultVal);
      }
      else
      {
        System.err.println("Failed to get channel property '" + key + "'");
      }
    }
    return null;
  }

  /*
   * getImage(key) returns the channel defined image for property key. If that is null (e.g. due to
   * no defined channel image or the image file being corrupt/unusable/missing) it uses the image
   * defined in defaultChannelProps
   */
  public static Image getImage(String key)
  {
    return getImage(key, null, true);
  }

  /*
   * getImage(key, defaultImg) will get image associated with value from channel_properties for key.
   * If no property or associated image for key is found (or is usable), it will return defaultImg
   * and NOT fall back to the class defaultProps.
   */
  public static Image getImage(String key, Image defaultImg)
  {
    return getImage(key, defaultImg, false);
  }

  /*
   * internal method.  note that setting useClassDefaultImage=true will ignore the provided defaultImg
   */
  private static Image getImage(String key, Image defaultImg,
          boolean useClassDefaultImage)
  {
    Image img = null;
    if (imageMap().containsKey(key))
    {
      img = imageMap().get(key);
    }
    // Catch a previously untried or failed load
    if (img == null)
    {
      String path = getProperty(key, null, useClassDefaultImage);
      if (path == null) // no channel property or class default property (if
                        // requested)
      {
        return useClassDefaultImage ? null : defaultImg;
      }

      URL imageURL = ChannelProperties.class.getResource(path);
      ImageIcon imgIcon = imageURL == null ? null : new ImageIcon(imageURL);
      img = imgIcon == null ? null : imgIcon.getImage();
      if (img == null)
      {
        System.err.println(
                "Failed to load channel image " + key + "=" + path);
        if (!useClassDefaultImage)
        {
          return defaultImg;
        }
      }
      else
      {
        imageMap().put(key, img);
        urlMap.put(key, imageURL);
      }
    }
    return img;
  }

  /*
   * Public method to get the URL object pointing to a cached image.
   */
  public static URL getImageURL(String key)
  {
    if (getImage(key) != null)
    {
      if (urlMap().containsKey(key))
      {
        return urlMap().getOrDefault(key, null);
      }
      System.err.println(
              "Do not use getImageURL(key) before using getImage(key...)");
    }
    return null;
  }

  /*
   * Get a List of Icon images of different sizes.
   */
  public static ArrayList<Image> getIconList()
  {
    return iconList;
  }
}
