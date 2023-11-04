# `findExactMatch`

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `address` | `string` | 주소        |
| `type`    | `string` | 반환 타입   |

## 주소 규칙

예시:

```
경상남도 밀양시 단장면
경기도 성남시분당구 판교동
서울특별시 중구 신당동
```

규칙:
```
/시/면
/시/동
/시구/동
```
 
## 반환 타입

`array` 또는 `object`를 지정할 수 있다.

```
findExactMatch("경기도 성남시분당구 판교동", "array")
findExactMatch("경기도 성남시분당구 판교동", "object")
```

```
[
  [xxx, xxx],
  [xxx, xxx],
  [xxx, xxx],
  ...
]

[
  { lat: xxx, lng: xxx },
  { lat: xxx, lng: xxx },
  { lat: xxx, lng: xxx },
  ...
]
```

> **_NOTE:_** `array` 타입에서 첫 번째 값이 `lng`, 두 번째 값이 `lat`이다.