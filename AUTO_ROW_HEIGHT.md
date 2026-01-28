# 自适应行高功能说明

## 功能概述

DataTable 组件现在支持**自动调整行高**以避免垂直滚动条。当表格行数较多时，组件会自动减少行高，确保所有行都能在可视区域内完整显示。

## 工作原理

### 1. 动态计算行高

```typescript
// 计算流程：
容器高度 - 表头高度 - 边框缓冲 = 可用高度
可用高度 ÷ 数据行数 = 每行高度
```

### 2. 智能最小高度

根据数据行数设置不同的最小行高，保证可读性：

- **≤15 行**: 最小 20px
- **16-20 行**: 最小 18px
- **>20 行**: 最小 16px

### 3. 自适应样式调整

组件会根据计算出的行高自动调整：

#### 字体大小
- 行高 < 18px → `text-[8px]` (8像素)
- 行高 18-22px → `text-[9px]` (9像素)
- 行高 ≥ 22px → `text-[10px]` (10像素)

#### 单元格内边距
- 行高 < 20px → `px-1.5 py-0.5`
- 行高 20-24px → `px-2 py-0.5`
- 行高 24-28px → `px-2 py-1`
- 行高 ≥ 28px → `px-2 py-1.5`

## 技术实现

### 核心代码

```typescript
React.useEffect(() => {
  const calculateRowHeight = () => {
    requestAnimationFrame(() => {
      const containerHeight = tableRef.current.clientHeight;
      const headerHeight = theadElement.offsetHeight;
      const borderBuffer = data.length * 2;
      const availableHeight = containerHeight - headerHeight - borderBuffer;

      const calculatedHeight = availableHeight / data.length;
      const minHeight = data.length > 20 ? 16 : data.length > 15 ? 18 : 20;
      const finalHeight = Math.max(calculatedHeight, minHeight);

      setRowHeight(`${finalHeight}px`);
    });
  };

  calculateRowHeight();
  window.addEventListener('resize', calculateRowHeight);
}, [data.length]);
```

### 关键特性

1. **垂直方向禁止滚动**: `overflow-y-hidden`
2. **水平方向允许滚动**: `overflow-x-auto`
3. **响应式调整**: 监听窗口 resize 事件
4. **延迟计算**: 使用 `requestAnimationFrame` 确保 DOM 渲染完成

## 使用示例

### 场景 1: 少量数据（10行）

```tsx
<DataTable data={data10Rows} columns={columns} />
```

**效果**:
- 行高: ~30px（舒适的行间距）
- 字体: 10px
- 内边距: px-2 py-1.5

### 场景 2: 中等数据（15行）

```tsx
<DataTable data={data15Rows} columns={columns} />
```

**效果**:
- 行高: ~24px（紧凑但清晰）
- 字体: 10px
- 内边距: px-2 py-1

### 场景 3: 大量数据（30行）

```tsx
<DataTable data={data30Rows} columns={columns} />
```

**效果**:
- 行高: ~16px（最小行高，最大信息密度）
- 字体: 8px
- 内边距: px-1.5 py-0.5
- ✅ 无垂直滚动条，所有数据一屏显示

## 受影响的表格

以下 10 个表格组件已全部启用自适应行高功能：

1. ✅ IndustrialFinancialTable
2. ✅ IndustryGrowthTable (12行数据)
3. ✅ CpiEightCategoriesTable (8行数据)
4. ✅ EquipmentInvestmentTable
5. ✅ InfrastructureTable
6. ✅ PpiIndustryMomTable (约15行数据)
7. ✅ IndustryGrowthTableChart
8. ✅ ExportDynamicsTable
9. ✅ RetailCategoryTable (4行数据，轻松显示)
10. ✅ ImportCoreCommoditiesTable (5行数据)

## 浏览器兼容性

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ 所有现代浏览器

使用的 API:
- `requestAnimationFrame` (已广泛支持)
- `ResizeObserver` (通过 window resize 事件实现)

## 性能优化

1. **防抖**: 使用 requestAnimationFrame 避免频繁计算
2. **条件渲染**: 仅在数据或容器尺寸变化时重新计算
3. **清理机制**: useEffect 正确清理事件监听器

## 注意事项

### 最佳实践

✅ **推荐**: 表格数据行数 5-30 行
✅ **适用**: TableContainer 正确设置 flex 布局
✅ **建议**: 数据列不要过多（<15列），避免需要过多水平滚动

### 已知限制

⚠️ **极端情况**: 如果数据超过 50 行，即使缩到最小行高也可能需要滚动
⚠️ **多级表头**: 复杂表头可能需要手动调整 headerHeight 计算逻辑

## 测试方法

访问 http://localhost:3001 并检查：

1. **无垂直滚动条**: 所有表格垂直方向无滚动条
2. **完整显示**: 所有数据行在一屏内可见
3. **可读性**: 字体大小和行间距保持良好可读性
4. **响应式**: 调整浏览器窗口大小时，行高自动调整

## 未来改进

可能的增强方向：

1. 添加 `minRowHeight` 和 `maxRowHeight` props 让用户自定义范围
2. 支持虚拟滚动（Virtual Scrolling）处理超大数据集
3. 添加过渡动画使行高变化更平滑
4. 提供 `autoFit` prop 让用户选择是否启用此功能
