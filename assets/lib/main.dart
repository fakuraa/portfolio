import 'package:fakuraa_portfolio/firebase_options.dart';
import 'package:fakuraa_portfolio/modules/home/home_view.dart';
import 'package:fakuraa_portfolio/themes/app_theme.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:responsive_sizer/responsive_sizer.dart';

Future<void> main() async {
  if (kDebugMode) {
    debugPrint = (String? message, {int? wrapWidth}) =>
        debugPrintSynchronously(message, wrapWidth: wrapWidth);
  } else {
    debugPrint = (String? message, {int? wrapWidth}) {};
  }

  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsiveSizer(builder: (context, orientation, deviceType) {
      return MaterialApp(
        scrollBehavior: const MaterialScrollBehavior().copyWith(
          dragDevices: {PointerDeviceKind.mouse, PointerDeviceKind.touch},
        ),
        debugShowCheckedModeBanner: false,
        home: const HomeView(),
        theme: AppTheme.buildThemeData(false),
        builder: (BuildContext context, child) {
          return MediaQuery(
            data: MediaQuery.of(context)
                .copyWith(textScaler: const TextScaler.linear(1.0)),
            child: child ?? Container(),
          );
        },
      );
    });
  }
}
