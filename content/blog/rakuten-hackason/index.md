---
title: "楽天のハッカソンで優勝しました"
date: "2020-09-21T19:12:03.284Z"
category: "self"
emoji: "🙌"
---

![楽天](rakuten.jpg)
楽天の夏のインターン（二子玉川夏の陣2020）に参加してきました。


そして、結果的には優勝できました！！！！！！！

作ったサービスの紹介や取り組んだことを紹介します。

## インターン概要
5月に参加したサポーターズさんの逆求人面接からの選考パスでした。

参加前に一度懇親会があり、ハッカソン型のインターンなのでチーム発表がありました。チームでお互いに自己紹介する時間もありました。面接で調子良く留学アピールをしてしまった為、メンバー全員が英語話せる枠だったようで泣きました。

それはさておき、インターンは2週間で、最初の1週間はほとんど設計で終わります。インターンではあるテーマが与えられ、それに沿って各チームプロダクト開発をします。
社会の課題を洗い出すフェーズから、その解決策となるサービスのアイディアを考え、プロダクトデザイン、システムデザイン、開発からテストまで、プロダクト開発の最初から最後までを経験することができました。

## サービス設計
まずはホワイトボードにブレインストーミング。

![issue](issue.jpg)

プロダクト開発で一番難しいのここですよね。

最初決まりそうになった案は「大学に行けない大学生がオンラインで繋がれるプラットフォーム」

特に大学1年生は履修登録や課題でわからないことがあっても頼れる人が少ないのでは、という課題から考えたサービスでした。

でも、もっと斬新なアイディアのサービス捻り出したいねということでメンバー4人でひたすら悩みました。1.5日くらい悩みました。

そして決まったのが、

**「音楽で人と人を繋ぐサービス」**

次に、欲しい機能など要件定義をしました。サービスのアーキテクチャや、データフローなんかも考えて、資料にまとめていきます。

![アーキテクチャ](architecture.jpg)

![データフロー](data_flow.jpg)

さらにUIもざっくり考えてWireframeを作成しました。

![ワイヤフレーム](wireframe.jpg)

## 開発
僕は機械学習とフロントエンドを担当する予定だったのですが、機械学習の機能が必要なくなりデザイン周りやフロントエンドをいじってました。メンバーにReactつよつよ君が居たので色々と勉強になりました。

ちなみに機械学習でやろうとしていたレコメンド機能は別記事にまとめる予定です。

## 作ったサービス
![amato_home](LandingPage.png)
### Issue
コロナ禍で人と会えないので十分なコミュニケーションが取れない。友達と話したい。

### Solution
音楽を通して趣味の合う人同士で繋がることのできるプラットフォームの開発。好きなアーティストの部屋に入るとその人の音楽を聴きながら、交流できる（今回のプロトタイプではチャット）。

### Functions
![functions](functions.jpg)
実装されている機能はspotifyによるOAuthログイン、お気に入りのアーティストの登録をはじめとしたプロフィール機能や、好きなアーティストの部屋を探す検索機能、アーティストの部屋で音楽を聴きながらチャットできる機能などがあります。

### LandingPage
![LP](LandingPage.png)

### Profile
![profile](amato_profile.jpg)
初めてログインしたユーザはこのページで自己紹介やお気に入りのアーティストを登録します。

### RoomList - PickUp
![pickup](RoomListPickup.png)
ホーム画面上部にはPickUpリストがあります。ここはユーザーが普段Spotifyで聞いている曲を参考にレコメンドされたアーティストが並びます。（実際にスクショは自分の好きなアーティストです）

### RoomList - Search
![search](RoomListSearch.png)
ホーム画面下部にはSearch機能があります。PickUpリストに入りたいRoomがなければここから検索しましょう。

### Chat
![chat](Chat.png)
Roomに入ると自動的に音楽が流れ始め、同時にそのRoomにいる他のユーザと曲を共有できます。

## Final Presentation
<iframe src="//www.slideshare.net/slideshow/embed_code/key/Fl4heiW4df999m" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/secret/Fl4heiW4df999m" title="Amato MUSIC" target="_blank">Amato MUSIC</a> </strong> from <strong><a href="https://www.slideshare.net/KentoTanaka4" target="_blank">Kent T</a></strong> </div>

Final Presentationの資料を参考程度にあげておきます。（関係者の方、何か問題ありましたらご連絡ください。）

## まとめ
今回初めて、プロダクトを開発する上で設計から開発まで全てのフローを一通り経験できました。正直かなりのタスク量で、2週間というタイトなスケジュールだった為、後半は疲れ果てましたが、刺激的な毎日を送ることができました。優しくフォローしてくださったメンターの社員さんにも感謝です。

また、チームメンバーの優秀さに圧倒され、自分ももっと頑張らねばなと思えました。
今回のインターンでデザイン周りやフロントエンドにさらに興味を持ったので、UIUXの勉強もしてみたいなと思います。
では。
