# チャージ記録画面に遷移する
```ts
await page.locator('#btn_usrStatement').click();
```
# 宛先を入力する

```ts
  await page.locator('input[name="receiptAddress1"]').click();
  await page.locator('input[name="receiptAddress1"]').fill('株式会社');
  await page.locator('input[name="receiptAddress2"]').click();
  await page.locator('input[name="receiptAddress2"]').fill('MisskeyHQ');
```

# 種別を選択する

```ts
  await page.locator('#Select0').selectOption('2');  
```

# 日付を変更する

```ts
  await page.locator('select[name="selDayF"]').selectOption('1 1');
```

# 表示ボタンを押す

```ts
  await page.getByRole('button', { name: '表示' }).click();
```

# PDFをダウンロードする
```ts
  await page.locator('#Use_SF_PrintButton1').click();
```

# 例 HTML
```html
<div class="searchBox">
					<p class="subtitle">ご利用明細検索</p>
					<span class="MT25 tableBox">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tbody>
						<tr>
							<td class="grybg01">
								<table class="setTable" width="100%" border="0" cellspacing="0" cellpadding="8">
									<tbody><tr>
										<td>
											
												<font class="sentence">種別</font>
												<select name="ticketType" id="Select0">
													
														<option value="0">  </option>
													
														<option value="2" selected=""> SFチャージ</option>
													
														<option value="3"> 定期券</option>
													
														<option value="61"> おトクなきっぷ</option>
													
														<option value="4"> Suicaグリーン券</option>
													
												</select>
												
												<font class="sentence">処理日</font>
											
											<select name="selMonthF" id="Select1">
												<option value="2025/8 2025/8" selected="selected">2025年8月</option><option value="2025/7 2025/7">2025年7月</option><option value="2025/6 2025/6">2025年6月</option><option value="2025/5 2025/5">2025年5月</option><option value="2025/4 2025/4">2025年4月</option><option value="2025/3 2025/3">2025年3月</option><option value="2025/2 2025/2">2025年2月</option><option value="2025/1 2025/1">2025年1月</option><option value="2024/12 2024/12">2024年12月</option><option value="2024/11 2024/11">2024年11月</option><option value="2024/10 2024/10">2024年10月</option><option value="2024/9 2024/9">2024年9月</option><option value="2024/8 2024/8">2024年8月</option>
											</select>
											<select name="selDayF" id="Select2">
												<option value="1 1" selected="selected">1日</option><option value="2 2">2日</option><option value="3 3">3日</option><option value="4 4">4日</option><option value="5 5">5日</option><option value="6 6">6日</option><option value="7 7">7日</option><option value="8 8">8日</option><option value="9 9">9日</option><option value="10 10">10日</option><option value="11 11">11日</option><option value="12 12">12日</option><option value="13 13">13日</option><option value="14 14">14日</option><option value="15 15">15日</option><option value="16 16">16日</option><option value="17 17">17日</option><option value="18 18">18日</option><option value="19 19">19日</option><option value="20 20">20日</option><option value="21 21">21日</option><option value="22 22">22日</option><option value="23 23">23日</option><option value="24 24">24日</option><option value="25 25">25日</option><option value="26 26">26日</option><option value="27 27">27日</option><option value="28 28">28日</option><option value="29 29">29日</option><option value="30 30">30日</option><option value="31 31">31日</option>
											</select>
											～
											<select name="selMonthT" id="Select1">
												<option value="2025/8 2025/8" selected="selected">2025年8月</option><option value="2025/7 2025/7">2025年7月</option><option value="2025/6 2025/6">2025年6月</option><option value="2025/5 2025/5">2025年5月</option><option value="2025/4 2025/4">2025年4月</option><option value="2025/3 2025/3">2025年3月</option><option value="2025/2 2025/2">2025年2月</option><option value="2025/1 2025/1">2025年1月</option><option value="2024/12 2024/12">2024年12月</option><option value="2024/11 2024/11">2024年11月</option><option value="2024/10 2024/10">2024年10月</option><option value="2024/9 2024/9">2024年9月</option><option value="2024/8 2024/8">2024年8月</option>
											</select>
											<select name="seldayT" id="Select2">
												<option value="1 1">1日</option><option value="2 2">2日</option><option value="3 3">3日</option><option value="4 4">4日</option><option value="5 5">5日</option><option value="6 6">6日</option><option value="7 7">7日</option><option value="8 8">8日</option><option value="9 9">9日</option><option value="10 10">10日</option><option value="11 11">11日</option><option value="12 12">12日</option><option value="13 13">13日</option><option value="14 14">14日</option><option value="15 15">15日</option><option value="16 16">16日</option><option value="17 17">17日</option><option value="18 18">18日</option><option value="19 19">19日</option><option value="20 20">20日</option><option value="21 21">21日</option><option value="22 22">22日</option><option value="23 23">23日</option><option value="24 24">24日</option><option value="25 25">25日</option><option value="26 26">26日</option><option value="27 27">27日</option><option value="28 28">28日</option><option value="29 29">29日</option><option value="30 30">30日</option><option value="31 31" selected="selected">31日</option>
											</select>
											<input type="submit" value="表示" name="HYOUJI" id="Submit1">
										</td>
									</tr>
								</tbody></table>
								<table class="RefundTable" width="100%" border="0" cellspacing="1" cellpadding="8">
									<tbody><tr class="NoLine">
										<td class="grybg02" align="center" width="150"><font class="tx-whts">種別</font></td>
										<td class="grybg02" align="center" width="120"><font class="tx-whts">処理日</font></td>
										<td class="grybg02" align="center" width="120"><font class="tx-whts">区分</font></td>
										
										<td class="grybg02" align="center" width="240"><font class="tx-whts">内容</font></td>
										<td class="grybg02" align="center" width="120"><font class="tx-whts">ご利用明細書</font></td>
										<td class="grybg02" align="center" width="120"><font class="tx-whts">払戻計算書</font></td>
										
									</tr>
									
									
									<tr>
										
										<td class="whtbg type" rowspan="20" width="90">
											<font class="sl">SF(電子マネー)<br>
												入金(チャージ)</font> <input type="hidden" name="sfcounthide" id="SfHidden" value="20">
										</td>
										

										<td class="whtbg" align="center"><font class="sl">25/08/28</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：2,910円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(0)" id="SF_Key2_Card_U(0)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton0" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton0',0)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(0)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/28</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：210円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(1)" id="SF_Key2_Card_U(1)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton1" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton1',1)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(1)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/28</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,344円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(2)" id="SF_Key2_Card_U(2)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton2" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton2',2)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(2)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/27</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：506円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(3)" id="SF_Key2_Card_U(3)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton3" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton3',3)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(3)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/20</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：2,700円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(4)" id="SF_Key2_Card_U(4)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton4" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton4',4)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(4)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/20</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：146円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(5)" id="SF_Key2_Card_U(5)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton5" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton5',5)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(5)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/20</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：209円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(6)" id="SF_Key2_Card_U(6)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton6" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton6',6)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(6)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/20</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,428円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(7)" id="SF_Key2_Card_U(7)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton7" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton7',7)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(7)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/19</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,907円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(8)" id="SF_Key2_Card_U(8)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton8" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton8',8)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(8)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/18</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：400円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(9)" id="SF_Key2_Card_U(9)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton9" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton9',9)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(9)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/17</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：400円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(10)" id="SF_Key2_Card_U(10)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton10" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton10',10)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(10)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/17</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：400円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(11)" id="SF_Key2_Card_U(11)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton11" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton11',11)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(11)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/16</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：400円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(12)" id="SF_Key2_Card_U(12)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton12" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton12',12)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(12)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/16</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：400円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(13)" id="SF_Key2_Card_U(13)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton13" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton13',13)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(13)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/15</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,319円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(14)" id="SF_Key2_Card_U(14)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton14" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton14',14)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(14)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/15</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：146円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(15)" id="SF_Key2_Card_U(15)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton15" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton15',15)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(15)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/15</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,800円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(16)" id="SF_Key2_Card_U(16)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton16" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton16',16)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(16)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/07</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：2,878円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(17)" id="SF_Key2_Card_U(17)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton17" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton17',17)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(17)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/07</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,300円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(18)" id="SF_Key2_Card_U(18)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton18" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton18',18)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(18)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
									<tr>
										

										<td class="whtbg" align="center"><font class="sl">25/08/07</font></td>
										<td class="whtbg" align="center"><font class="sl">購入</font></td>
										<td class="whtbg type"><ul><li class="list_title">入金（チャージ）額：1,978円</li><li class="inputCheck"><img src="/img/icon_check.gif" alt="必須印刷"><label class="sentence">購入商品:SF(電子マネー)</label></li><li class="inputCheck"><input type="checkbox" name="SF_Key2_Card_U(19)" id="SF_Key2_Card_U(19)" checked=""><label class="sentence">決済手段:Google Pay</label></li></ul></td>
										
										<td class="whtbg printingBut" align="center">
											
											<button id="Use_SF_PrintButton19" width="80" value="印刷" onclick="aaa('Use_SF_PrintButton19',19)" name="Use_SF" border="0">印刷</button>
											
										</td>
										<td class="whtbg" align="center">
											
											<input type="button" width="40" alt="印刷" onclick="aaa(19)" style="VISIBILITY:hidden" name="Rfund_SF" border="0">
											
										</td>
										
									</tr>
									
								</tbody></table>
							</td>
						</tr>
					</tbody></table>
					</span>
				</div>
```