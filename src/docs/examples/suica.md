# これは、履歴の全部の選択を解除する例
最初は全てにチェックが入っているので、全部のチェックを外す例
```ts
await page.locator('input[name="selectAll"]').uncheck();
```

# これはチェックボタンを入れる例
```ts
await page.getByRole('row', { name: '08/29 ﾊﾞｽ等 ちばグリ \\23 -2,700', exact: true }).getByRole('checkbox').uncheck();
```

# これを実行すると、履歴が落とされる
```ts
await page.getByRole('button', { name: '選択した履歴を印刷' }).click();
```

# これは実際のhtml
```html
<tbody><tr class="NoLine">
										<td class="pad08 grybg02 check" align="center" width="50px"><input type="checkbox" name="selectAll" value="1" checked="checked" onclick="CheckOnAll()"><label></label></td>
										<td class="pad08 grybg02" align="center" width="100px"><font class="tx-wht">月日</font></td>
										<td class="pad08 grybg02" align="center" width="100px"><font class="tx-wht">種別</font></td>
										<td class="pad08 grybg02" align="center" width="130px"><font class="tx-wht">利用場所</font></td>
										<td class="pad08 grybg02" align="center" width="100px"><font class="tx-wht">種別</font></td>
										<td class="pad08 grybg02" align="center" width="130px"><font class="tx-wht">利用場所</font></td>
										<td class="pad08 grybg02" align="center" width="130px"><font class="tx-wht">残高</font></td>
										<td class="pad08 grybg02" align="center" width="130px"><font class="tx-wht">入金・利用額</font></td>
									</tr>
									<!--↑↑SF履歴のヘッダー行↑↑-->

									<!--↓↓SF履歴の明細行↓↓-->
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="100" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/29</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\23</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="99" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">新宿　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">東京　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,723</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-208</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="98" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,931</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+2,910</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="97" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">都六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">都　新宿</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\21</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-220</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="96" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\241</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+210</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="95" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地八丁堀</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="94" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">東金　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">八丁堀　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\209</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,166</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="93" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/28</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,375</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,344</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="92" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">東金　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">千葉　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-506</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="91" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\537</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+506</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="90" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/21</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="89" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,731</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="88" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">神田　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">東京　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-146</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="87" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\177</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+146</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="86" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　神田</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-209</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="85" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\240</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+209</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="84" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="83" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\209</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="82" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,009</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,428</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="81" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/19</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">南流山　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">千葉　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\581</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-571</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="80" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/19</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">研究学園</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">ＴＸ南流</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,152</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-786</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="79" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/19</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,938</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,907</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="78" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">関東鉄Ｂ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="77" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="76" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/17</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">関東鉄Ｂ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="75" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/17</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="74" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/17</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">関東鉄Ｂ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="73" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/17</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="72" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">関東鉄Ｂ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="71" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="70" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">関東鉄Ｂ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="69" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="68" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">ＴＸ秋葉</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">研究学園</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,152</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="67" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">新橋　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">秋葉原　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,183</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-167</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="66" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,350</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,319</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="65" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">東京　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">新橋　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-146</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="64" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\177</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+146</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="63" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="62" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,831</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="61" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/08</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="60" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,731</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="59" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,909</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+2,878</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="58" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">物販</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\31</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,400</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="57" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,431</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,300</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="56" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\131</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="55" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\309</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="54" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/07</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,109</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,978</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="53" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">08/01</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\131</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="52" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,831</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="51" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\3,009</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+2,878</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="50" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">物販</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\131</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,830</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="49" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,961</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,558</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="48" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\403</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+302</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="47" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\101</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+101</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="46" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">物販</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-200</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="45" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\200</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="44" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\378</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="43" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\200</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="42" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/31</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,000</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,010</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="41" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/24</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\990</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+200</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="40" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">物販</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\790</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-200</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="39" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/20</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\990</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+200</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="38" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">SPさっぽ</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">SP中島公</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\790</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-210</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="37" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,000</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,000</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="36" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">東金　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">成田空港</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-990</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="35" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/18</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\990</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+990</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="34" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/17</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="33" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\2,700</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+2,700</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="32" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="31" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="30" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="29" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="28" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="27" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/16</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="26" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="25" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="24" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="23" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/15</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="22" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="21" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="20" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="19" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="18" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="17" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="16" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="15" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/10</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="14" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/02</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="13" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/02</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="12" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/02</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="11" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">07/02</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="10" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">ﾊﾞｽ等</font></td>
														<td class="whtbg" align="center"><font class="sentence">ちばグリ</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-1,800</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="9" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,800</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="8" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\1,978</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+1,978</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="7" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">森下　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">都六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-272</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="6" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\272</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+272</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="5" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/27</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">都　新宿</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">森下　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-272</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="4" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/26</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\272</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+272</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="3" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/26</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">地　東京</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">地六本木</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\0</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-178</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="2" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/26</font></td>
														<td class="whtbg" align="center"><font class="sentence">ｶｰﾄﾞ</font></td>
														<td class="whtbg" align="center"><font class="sentence">モバイル</font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">+150</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="1" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/26</font></td>
														<td class="whtbg" align="center"><font class="sentence">入</font></td>
														<td class="whtbg" align="center"><font class="sentence">東京　　</font></td>
														<td class="whtbg" align="center"><font class="sentence">出</font></td>
														<td class="whtbg" align="center"><font class="sentence">東京　　</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\28</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">-150</font></td>
													</tr>
									
													<!-- 特殊形式履歴以外の場合 -->
													<tr>
														<td class="whtbg check" align="center"><input type="checkbox" name="printCheck" value="0" checked="checked"><label></label></td>
														<td class="whtbg" align="center"><font class="sentence">06/26</font></td>
														<td class="whtbg" align="center"><font class="sentence">繰</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg" align="center"><font class="sentence">　</font></td>
														<td class="whtbg" align="center"><font class="sentence"></font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title">\178</font></td>
														<td class="whtbg MoneyText" align="right"><font class="list_title"></font></td>
													</tr>
									
									<!--↑↑SF履歴の明細行↑↑-->
								</tbody>
```